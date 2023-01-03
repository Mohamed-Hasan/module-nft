import { Injectable } from '@nestjs/common';
import { OwnedNftsResponse } from 'alchemy-sdk';

@Injectable()
export class AccountService {
  async getOwnerNftBalance(accountAddress: string, contractAddresses?: string[]): Promise<OwnedNftsResponse> {
    const allNftsResponses: Mutable<OwnedNftsResponse> = { totalCount: 0, ownedNfts: [] };
    return allNftsResponses;
  }
}
