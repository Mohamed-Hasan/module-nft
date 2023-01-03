import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './modules/account/account.module';
import { ContractModule } from './modules/contract/contract.module';

@Module({
  imports: [ConfigModule.forRoot(), ContractModule, AccountModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
