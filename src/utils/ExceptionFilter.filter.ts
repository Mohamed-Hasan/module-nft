import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    let status = 500;
    let message = '';
    let details: any = {};
    let name = '';

    console.error(exception);

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.message;
      details = exception.getResponse();
      name = exception.name;
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Internal Server Error';
      name = 'INTERNAL_SERVER_ERROR';
    }

    if (typeof details === 'string') {
      details = { message: details };
    }

    // handle class-validator errors
    if (name === 'UnprocessableEntityException' && message === 'Unprocessable Entity Exception') {
      message = Array.isArray(details?.message) ? details.message[0] : message;
    }

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      status,
      message,
      details,
      name,
    });
  }
}
