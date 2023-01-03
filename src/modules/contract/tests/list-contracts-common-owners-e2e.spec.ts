import { Test, TestingModule } from '@nestjs/testing';
import { ContractController } from '../contract.controller';
import { ContractDataSource } from '../contract.datasource';
import { ContractService } from '../contract.service';
import { commonMockedOwnerAddreses, MockContractDataSource, mockedContractAddreses, mockedContractOwners } from './contract-datasource.mock';

describe('Contract Controller', () => {
  let app: TestingModule;
  let contractController: ContractController;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ContractController],
      providers: [ContractService, ContractDataSource],
    })
      .overrideProvider(ContractDataSource)
      .useClass(MockContractDataSource)
      .compile();
    contractController = app.get(ContractController);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('listContractsCommonOwners', () => {
    it('should return all owners of a single contract', async () => {
      const contractAddress = mockedContractAddreses[0];
      const expectedOwners = mockedContractOwners[contractAddress];
      const { data, status } = await contractController.listContractsCommonOwners({ contractAddresses: [contractAddress] });
      console.log(data);
      expect(status).toBe('ok');
      expect(data).toEqual(expectedOwners);
    });

    it('should return the intersection betweeen owners of two contracts', async () => {
      const firstContractAddress = mockedContractAddreses[0];
      const secondContractAddress = mockedContractAddreses[1];
      const expectedOwners = commonMockedOwnerAddreses;
      const { data, status } = await contractController.listContractsCommonOwners({ contractAddresses: [firstContractAddress, secondContractAddress] });
      expect(status).toBe('ok');
      expect(data).toEqual(expectedOwners);
    });

    it('should return the intersection betweeen owners of three contracts', async () => {
      const firstContractAddress = mockedContractAddreses[0];
      const secondContractAddress = mockedContractAddreses[1];
      const thirdContractAddress = mockedContractAddreses[2];
      const expectedOwners = commonMockedOwnerAddreses;
      const { data, status } = await contractController.listContractsCommonOwners({ contractAddresses: [firstContractAddress, secondContractAddress, thirdContractAddress] });
      expect(status).toBe('ok');
      expect(data).toEqual(expectedOwners);
    });
  });
});
