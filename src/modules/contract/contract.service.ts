import { Injectable } from '@nestjs/common';
import { ListContractsCommonOwnersRequestQueryDto } from './dto/list-contracts-common-owners-request.dto';
import { ContractDataSource } from './contract.datasource';
import { getIntersectionBetweenArrays } from '../../utils/helpers';

@Injectable()
export class ContractService {
  constructor(private readonly contractDataSource: ContractDataSource) {}

  getOwnersForContract(contractAddress: string): Promise<string[]> {
    return this.contractDataSource.getOwnersForContract(contractAddress);
  }

  async listContractsCommonOwners(params: ListContractsCommonOwnersRequestQueryDto) {
    const { contractAddresses } = params;
    const ownersPromises = contractAddresses.map((contractAddress) => {
      return this.getOwnersForContract(contractAddress);
    });
    const owners = await Promise.all(ownersPromises);
    return getIntersectionBetweenArrays(owners);
  }
}
