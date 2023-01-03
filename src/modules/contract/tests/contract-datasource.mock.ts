import { Injectable } from '@nestjs/common';
import { GetOwnersForContractResponse } from 'alchemy-sdk';

@Injectable()
export class MockContractDataSource {
  async getOwnersForContract(contractAddress: string): Promise<GetOwnersForContractResponse['owners']> {
    return mockedContractOwners[contractAddress];
  }
}

export const commonMockedOwnerAddreses: string[] = [
  '0x04c36d1373b69177f311c2e27fea6ed61a3b84b1',
  '0x3e25128b3d0fe54edd000a32731b804d92b106dc',
  '0x3b0c3da5da1041400ce8917b698a0fb83a0b4467',
  '0x3b0c3da5da1041400ce8917b698a0fb83a0b4468',
];

export const mockedContractAddreses: string[] = [
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
  '0x1a92f7381b9f03921564a437210bb9396471050c',
  '0x2030faca4e00935812c454bf4e8970a2c39a6173',
];

export const mockedContractOwners: Record<string, GetOwnersForContractResponse['owners']> = {
  [mockedContractAddreses[0]]: [...commonMockedOwnerAddreses, '0x409d00da400724785d485b159b1aca97ad280eb1', '0x3d280fde2ddb59323c891cf30995e1862510342f'],
  [mockedContractAddreses[1]]: [...commonMockedOwnerAddreses, '0x40d775827365ae4d54cbc08a1a1c4f586b2c1d0a', '0x3da6394dfebe72421b1a2567a94a3829fdcdc712'],
  [mockedContractAddreses[2]]: [...commonMockedOwnerAddreses, '0x410d16dd3fee064afbfd9b14173b1435ed6e9a67', '0x41d870c141f7a6ae406ddc5f5de566499714b8c6'],
};
