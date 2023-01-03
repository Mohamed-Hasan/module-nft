import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractDataSource } from './contract.datasource';
import { ContractService } from './contract.service';

@Module({
  imports: [],
  controllers: [ContractController],
  providers: [ContractService, ContractDataSource],
})
export class ContractModule {}
