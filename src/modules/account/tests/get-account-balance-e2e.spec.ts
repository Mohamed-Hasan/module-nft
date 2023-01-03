import { Test, TestingModule } from '@nestjs/testing';
import { AccountController } from '../account.controller';
import { AccountsDataSource } from '../account.datasource';
import { AccountService } from '../account.service';
import { MockAccountsDataSource, mockedAccountBalances, mockedContractAddreses, mockedOwnerAddreses } from './account-datasource.mock';

describe('AccountController', () => {
  let app: TestingModule;
  let accountController: AccountController;
  let mockAccountsDataSource: MockAccountsDataSource;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AccountController],
      providers: [AccountService, AccountsDataSource],
    })
      .overrideProvider(AccountsDataSource)
      .useClass(MockAccountsDataSource)
      .compile();
    accountController = app.get(AccountController);
    mockAccountsDataSource = app.get(AccountsDataSource);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('GET /v1/account/:accountAddress/balance', () => {
    it('should return all nfts balance owned by account in all contracts', async () => {
      const accountAdddress = mockedOwnerAddreses[0];
      const expectedMockedBalance = mockedAccountBalances[accountAdddress][0];
      const { status, balance } = await accountController.getAccountBalance(accountAdddress);
      expect(status).toBe('ok');
      expect(balance).toBe(expectedMockedBalance.totalCount);
    });

    it('should return the nfts balance owned by account in a single contract', async () => {
      const accountAdddress = mockedOwnerAddreses[1];
      const contractAddress = mockedContractAddreses[0];
      const expectedMockedBalance = mockedAccountBalances[accountAdddress][0];
      const getAccountNftsBalanceSpy = jest.spyOn(mockAccountsDataSource, 'getAccountNftsBalance');
      const { status, balance, balanceDetails } = await accountController.getAccountBalance(accountAdddress, { contractAddresses: [contractAddress] });
      expect(status).toBe('ok');
      expect(balance).toBe(expectedMockedBalance.totalCount);
      expect(balanceDetails[0].balance).toBe(expectedMockedBalance.totalCount);
      expect(balanceDetails[0].contractAddress).toBe(contractAddress);
      expect(getAccountNftsBalanceSpy).toHaveBeenCalledTimes(1);
      expect(getAccountNftsBalanceSpy).toHaveBeenCalledWith(accountAdddress, [contractAddress], undefined);
    });

    it('should return the nfts balance owned by account in a multiple contract', async () => {
      const accountAdddress = mockedOwnerAddreses[2];
      const firstContract = mockedContractAddreses[0];
      const secondContract = mockedContractAddreses[1];
      const expectedMockedBalance = mockedAccountBalances[accountAdddress][0];
      const getAccountNftsBalanceSpy = jest.spyOn(mockAccountsDataSource, 'getAccountNftsBalance');
      const { status, balance, balanceDetails } = await accountController.getAccountBalance(accountAdddress, { contractAddresses: [firstContract, secondContract] });
      expect(status).toBe('ok');
      expect(balance).toBe(expectedMockedBalance.totalCount);
      expect([firstContract, secondContract].includes(balanceDetails[0].contractAddress)).toBeTruthy();
      expect(getAccountNftsBalanceSpy).toHaveBeenCalledTimes(1);
      expect(getAccountNftsBalanceSpy).toHaveBeenCalledWith(accountAdddress, [firstContract, secondContract], undefined);
    });
  });

  it('should return the nfts balance owned by account in a multiple contract from all pages', async () => {
    const accountAdddress = mockedOwnerAddreses[3];
    const firstContract = mockedContractAddreses[0];
    const secondContract = mockedContractAddreses[1];
    const expectedFirstPageMockedBalance = mockedAccountBalances[accountAdddress][0];
    const getAccountNftsBalanceSpy = jest.spyOn(mockAccountsDataSource, 'getAccountNftsBalance');
    const { status, balance, balanceDetails } = await accountController.getAccountBalance(accountAdddress, { contractAddresses: [firstContract, secondContract] });

    expect(status).toBe('ok');
    expect(balance).toBe(expectedFirstPageMockedBalance.totalCount);
    expect([firstContract, secondContract].includes(balanceDetails[0].contractAddress)).toBeTruthy();
    expect(getAccountNftsBalanceSpy).toHaveBeenCalledTimes(2);
    expect(getAccountNftsBalanceSpy).toHaveBeenNthCalledWith(1, accountAdddress, [firstContract, secondContract], undefined);
    expect(getAccountNftsBalanceSpy).toHaveBeenLastCalledWith(accountAdddress, [firstContract, secondContract], expectedFirstPageMockedBalance.pageKey);
  });
});
