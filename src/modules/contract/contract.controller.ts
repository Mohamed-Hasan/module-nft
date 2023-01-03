import { Controller, Get, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { v1ContractRouter } from './contract.router';
import { ListContractCommonOwnersResponseDto } from './dto/list-contract-common-owners-response.dto';
import { ListContractsCommonOwnersRequestQueryDto } from './dto/list-contracts-common-owners-request.dto';

@ApiTags('v1-contract')
@Controller({
  version: v1ContractRouter.version,
  path: v1ContractRouter.root,
})
@Controller()
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @ApiOperation({
    summary: 'List Contracts Common Owners',
    description: 'This Api will return the common/intersection of owners in multiple contracts',
    operationId: 'V1ListContractsCommonOwners',
  })
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    type: ListContractCommonOwnersResponseDto,
  })
  @Get(v1ContractRouter.paths.listContractsCommonOwners)
  async listContractsCommonOwners(@Query() dto: ListContractsCommonOwnersRequestQueryDto): Promise<ListContractCommonOwnersResponseDto> {
    const owners = await this.contractService.listContractsCommonOwners(dto);
    return new ListContractCommonOwnersResponseDto(owners);
  }
}
