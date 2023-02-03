# Loan calculator

## Local

### Pre-requisites

1. Rename `.env.example` to `.env`.

2. Make sure `yarn` is installed on your machine and run `yarn install` to install the dependencies of all monorepo packages.

### Tests

Run the command below to run _tests_ for **server** and **client** application.

```
yarn test
```

### Development

Run the command below to run **server** and **client** application, as well as **package dependencies** in _dev mode_.

```
yarn dev
```

## Prod Setup

1. Rename `.env.example` to `.env`.

2. Make sure `docker` is installed on your machine and run the compose command below to run **server** and **client** application in _production mode_.

```
docker compose --env-file .env up
```

## URLs

### Swagger UI

http://localhost:3000/api

### Next client

http://localhost:8000/
