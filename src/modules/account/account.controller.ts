import { Controller, Get, HttpCode, HttpStatus, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { v1AccountRouter } from './account.router';
import { AccountService } from './account.service';
import { GetOwnerNftBalanceResponseDto } from './dto/get-owner-nft-balance-response.dto';
import { GetOwnerBalanceRequestQueryDto } from './dto/get-owner-nft-balance-request.dto';

@ApiTags('v1-account')
@Controller({
  version: v1AccountRouter.version,
  path: v1AccountRouter.root,
})
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @ApiOperation({
    summary: 'Get User Account Balance',
    description: 'This Api will return the user account balance',
    operationId: 'V1GetAccountBalance',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.CREATED,
    type: GetOwnerNftBalanceResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
  })
  @Get(v1AccountRouter.paths.getBalance)
  async getAccountBalance(@Param('id') accountAddress: string, @Query() dto?: GetOwnerBalanceRequestQueryDto): Promise<GetOwnerNftBalanceResponseDto> {
    const balance = await this.accountService.getOwnerNftBalance(accountAddress, dto?.contractAddresses);
    return new GetOwnerNftBalanceResponseDto(balance);
  }
}
