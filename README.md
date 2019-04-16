# Workast Assessment

## Requirements
- Docker
- Docker-compose
- NodeJS v8.11.3 (Recommended for local builds)

## Installation
```
cp .env_example .env
npm install
```

## Execution
```
docker-compose build && docker-compose up
```

## Auto-Documentation factors
- Business Operations I/O: ./src/tests
- Hard data: ./src/constants
- Functionality: jsDoc above functions and modules

Note: There is only the notation, there is not real generated docs.

## Tests
The only tests in this project are unit, all of them treat with mock data so all the functionalities are insured except the database operations and its schemas integrity.

To run the tests
```
npm test
```
To also see the coverage
```
npm test:coverage
```