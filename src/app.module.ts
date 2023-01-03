import { ContractModule } from '@modules/contract/contract.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ContractModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
console.log();
