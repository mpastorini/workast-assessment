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
Dev
```
docker-compose build --build-arg ENVIRONMENT=development && docker-compose up
```
Prod
```
docker-compose build --build-arg ENVIRONMENT=production && docker-compose up
```
Local
```
npm start
```
NOTE: You can pass PORT argument to docker-compose build, by default it will be the 80

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
npm run test:coverage
```

## Ramda

This project uses [ramda](https://ramdajs.com/), take in count that it curry all the functions.
So, for example (in the article decorator) when I do:
```
toReturn: pick(DECORATORS.ARTICLE.TO_RETURN)
```
It means
```
toReturn: article => pick(DECORATORS.ARTICLE.TO_RETURN, article)
```
