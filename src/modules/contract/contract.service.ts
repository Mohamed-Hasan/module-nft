import { Injectable } from '@nestjs/common';
import { ListContractsCommonOwnersRequestQueryDto } from './dto/list-contracts-common-owners-request.dto';

@Injectable()
export class ContractService {
  async listContractsCommonOwners(params: ListContractsCommonOwnersRequestQueryDto) {
    const { contractAddresses } = params;
    return ['0x3b0c3da5da1041400ce8917b698a0fb83a0b4467', '0x3b0c3da5da1041400ce8917b698a0fb83a0b4468'];
  }
}
