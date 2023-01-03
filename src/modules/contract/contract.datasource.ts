import { Injectable } from '@nestjs/common';
import { GetOwnersForContractResponse } from 'alchemy-sdk';
import { alchemy, IntegrationException } from '../../core/alchemy-sdk';

@Injectable()
export class ContractDataSource {
  async getOwnersForContract(contractAddress: string): Promise<GetOwnersForContractResponse['owners']> {
    const { owners } = await alchemy.nft.getOwnersForContract(contractAddress).catch((error) => {
      throw new IntegrationException(error?.message);
    });
    return owners;
  }
}
