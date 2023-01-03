import { Injectable } from '@nestjs/common';
import { OwnedNftsResponse } from 'alchemy-sdk';
import { AccountsDataSource } from './account.datasource';

@Injectable()
export class AccountService {
  constructor(private readonly accountDataSource: AccountsDataSource) {}
  async getOwnerNftBalance(accountAddress: string, contractAddresses?: string[]): Promise<OwnedNftsResponse> {
    const allNftsResponses: Mutable<OwnedNftsResponse> = { totalCount: 0, ownedNfts: [] };
    do {
      const { totalCount, pageKey, ownedNfts } = await this.accountDataSource.getAccountNftsBalance(accountAddress, contractAddresses, allNftsResponses.pageKey);
      allNftsResponses.totalCount = totalCount;
      allNftsResponses.pageKey = pageKey;
      allNftsResponses.ownedNfts = allNftsResponses.ownedNfts.concat(ownedNfts);
    } while (allNftsResponses.pageKey);
    return allNftsResponses;
  }
}
