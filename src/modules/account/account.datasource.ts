import { Injectable } from '@nestjs/common';
import { OwnedNftsResponse } from 'alchemy-sdk';
import { alchemy, IntegrationException } from '../../core/alchemy-sdk';

@Injectable()
export class AccountsDataSource {
  async getAccountNftsBalance(accountAddress: string, contractAddresses?: string[], pageKey?: string): Promise<OwnedNftsResponse> {
    const nfts = await alchemy.nft.getNftsForOwner(accountAddress, { contractAddresses, pageKey }).catch((error) => {
      throw new IntegrationException(error?.message);
    });
    return nfts;
  }
}
