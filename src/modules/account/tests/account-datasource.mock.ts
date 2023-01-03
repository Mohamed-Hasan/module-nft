import { Injectable } from '@nestjs/common';
import { NftTokenType, OwnedNftsResponse } from 'alchemy-sdk';

@Injectable()
export class MockAccountsDataSource {
  async getAccountNftsBalance(accountAddress: string, contractAddresses?: string[], pageKey?: string): Promise<OwnedNftsResponse> {
    return mockedAccountBalances[accountAddress][parseInt(pageKey) || 0];
  }
}

export const mockedOwnerAddreses: string[] = [
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

export const mockedAccountBalances: Record<string, OwnedNftsResponse[]> = {
  [mockedOwnerAddreses[0]]: [
    {
      ownedNfts: [
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[1],
            name: 'Cool Cats',
            symbol: 'COOLCAT',
            totalSupply: '9960',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[2],
            name: 'The QPT Metacard Item',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
      ],
      totalCount: 3,
    },
  ],
  [mockedOwnerAddreses[1]]: [
    {
      ownedNfts: [
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
      ],
      totalCount: 2,
    },
  ],
  [mockedOwnerAddreses[2]]: [
    {
      ownedNfts: [
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [
            {
              raw: 'ipfs://QmehGJcCJ78UoMExrwG335u9FJ2QMHyByDHzaHeyxibBfW',
              gateway: 'https://nft-cdn.alchemy.com/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              format: 'png',
              bytes: 191267,
            },
          ],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[1],
            name: 'Cool Cats',
            symbol: 'COOLCAT',
            totalSupply: '9960',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[1],
            name: 'Cool Cats',
            symbol: 'COOLCAT',
            totalSupply: '9960',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
      ],
      totalCount: 4,
    },
  ],
  [mockedOwnerAddreses[3]]: [
    {
      ownedNfts: [
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [
            {
              raw: 'ipfs://QmehGJcCJ78UoMExrwG335u9FJ2QMHyByDHzaHeyxibBfW',
              gateway: 'https://nft-cdn.alchemy.com/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              format: 'png',
              bytes: 191267,
            },
          ],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[1],
            name: 'Cool Cats',
            symbol: 'COOLCAT',
            totalSupply: '9960',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
      ],
      pageKey: '1',
      totalCount: 6,
    },
    {
      ownedNfts: [
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[0],
            name: 'BoredApeYachtClub',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [
            {
              raw: 'ipfs://QmehGJcCJ78UoMExrwG335u9FJ2QMHyByDHzaHeyxibBfW',
              gateway: 'https://nft-cdn.alchemy.com/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              thumbnail: 'https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/c148496f57e4b9965044ea928a677e3c',
              format: 'png',
              bytes: 191267,
            },
          ],
          balance: 1,
        },
        {
          contract: {
            address: mockedContractAddreses[1],
            name: 'Cool Cats',
            symbol: 'COOLCAT',
            totalSupply: '9960',
            tokenType: 'ERC721' as NftTokenType,
          },
          tokenId: '7214',
          tokenType: 'ERC721' as NftTokenType,
          metadataError: '',
          title: '',
          description: '',
          timeLastUpdated: '2022-12-29T23:40:43.363Z',
          rawMetadata: {},
          tokenUri: {
            raw: 'ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
            gateway: 'https://alchemy.mypinata.cloud/ipfs/QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/7214',
          },
          media: [],
          balance: 1,
        },
      ],
      totalCount: 6,
    },
  ],
};
