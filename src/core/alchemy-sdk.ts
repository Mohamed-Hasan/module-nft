import { HttpException, HttpStatus } from '@nestjs/common';
import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALKHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);

export class IntegrationException extends HttpException {
  public readonly name = 'ALCHEMY.INTEGRATION_ERROR';

  constructor(message: string) {
    super(message || 'Integration Error', HttpStatus.UNPROCESSABLE_ENTITY);
  }
}
