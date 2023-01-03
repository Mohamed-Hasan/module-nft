# Module-NFT

## Description

- It is a module that is used to retrieve some information about NFT from Ethereum Network 
- This module is powered by [NestJs](https://nestjs.com/) framework

## Installation

```bash
$ yarn
```
## Setup Configurations
- create a `.env` file
- add all necessary configurations to it
- You must add this env variable of alchemy api key to enable integration with alchemy platform that fetches data `ALKHEMY_API_KEY` 

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Application Links
- Base URL: http://{appUrl}:{port}/module-nft/       ex     ==> http://localhost:3000/module-nft
- Swagger Explorer: http://{appUrl}:{port}/api       ex     ==> http://localhost:3000/api
- Swagger File: http://{appUrl}:{port}/api-json      ex     ==> http://localhost:3000/api-json
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```