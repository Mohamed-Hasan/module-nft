import { Module } from '@nestjs/common';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';

@Module({
  imports: [],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContractModule {}