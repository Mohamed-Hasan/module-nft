import 'dotenv/config';

export const config: Record<string, any> = {
  port: process.env.PORT || 3000,
  alchemyApiKey: process.env.ALKHEMY_API_KEY,
  localAppUrl: `http://localhost:${process.env.PORT || 3000}/module-nft`,
};
