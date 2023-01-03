import { ApiProperty } from '@nestjs/swagger';
import { OwnedNft, OwnedNftsResponse } from 'alchemy-sdk';
import { groupBy } from 'lodash';

export class NftsBalancePerContract {
  @ApiProperty({
    description: 'contract Address',
    type: String,
    example: '0xfe348a1c6401b6a5c01bd4deef7bbac9148be0ce',
  })
  contractAddress: string;

  @ApiProperty({
    description: 'contract Name',
    type: String,
    example: 'Bore Api Yacht Club',
  })
  contractName: string;

  @ApiProperty({
    description: 'Nft tokens balance in contract',
    type: Number,
    example: 3,
  })
  balance: number;

  constructor(contractAddress: string, contractName: string, balance: number) {
    this.contractAddress = contractAddress;
    this.contractName = contractName;
    this.balance = balance;
  }
}

export class GetOwnerNftBalanceResponseDto {
  @ApiProperty({
    description: 'response status code',
    type: String,
    example: 'ok',
  })
  status = 'ok';

  @ApiProperty({
    description: 'account balance',
    type: Number,
    example: 3,
  })
  balance: number;

  @ApiProperty({
    description: 'account balance',
    isArray: true,
    type: NftsBalancePerContract,
  })
  balanceDetails: NftsBalancePerContract[];

  constructor(ownedNftsData: OwnedNftsResponse) {
    const nftsKeyedByContract = groupBy(ownedNftsData.ownedNfts, 'contract.address');
    this.status = 'ok';
    this.balance = ownedNftsData.totalCount;
    this.balanceDetails = Object.entries(nftsKeyedByContract).map(
      ([contractAddress, nfts]: [string, OwnedNft[]]) => new NftsBalancePerContract(contractAddress, nfts[0].contract.name, nfts.length),
    );
  }
}
