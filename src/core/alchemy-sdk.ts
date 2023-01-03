import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.ALKHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export const alchemy = new Alchemy(settings);
