# Rankings Demo project
## Installation 
This is NodeJS, Express, TypeScript project.
```
$ npm install
```

## Running the application
There are two ways how to run the application.
1. Development mode
```
$ npm run dev
```

2. Production mode
```
$ npm run build
$ node dist/index.js
```

## API
### GET /?regionId=$REGION_ID
Get request returns data in JSON format given `regionId` query parameter

## Step by step guide

### API dependencies
```
npm install dotenv --save
npm install cors --save
npm install express --save
```

### Development dependencies 
```
npm install --save-dev @types/node
npm install --save-dev @types/express 
npm install --save-dev @types/cors
npm install --save-dev esbuild
npm install --save-dev nodemon
npm install --save-dev supertest
npm install --save-dev @types/supertest
npm install --save-dev ts-jest
npm install --save-dev @jest/globals
npm install --save-dev @types/jest
```