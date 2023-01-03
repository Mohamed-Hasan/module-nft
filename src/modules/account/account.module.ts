import { Module } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AccountsDataSource } from './account.datasource';
import { AccountService } from './account.service';

@Module({
  imports: [],
  controllers: [AccountController],
  providers: [AccountService, AccountsDataSource],
})
export class AccountModule {}
