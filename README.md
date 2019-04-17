# Workast Assessment

## Requirements
- Docker
- Docker-compose
- NodeJS v8.11.3 (Recommended for local builds)

## Instructions

First of all
```
cp .env_example .env
```

Run it as a container
```
docker-compose build --build-arg ENVIRONMENT=[development|production]
docker-compose up
```

Or Locally
```
npm install
npm start:[development|production]
```

**Note1**: `[development|production]` means it could be one or other option, replace it by `development` or `production` please.

**Note2**: To change the `PORT`, you can pass `PORT` argument to docker-compose build, or .env file in the local case, by default it will be the `80`.

**Note3**: Development builds both local and containerized, runs with nodemon, so you the project reloads when you save a watched file.

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

## Auto-Documentation factors
- Business Operations I/O: `./src/tests`
- Hard data (Exceptions): `./src/constants`
- Functionality: jsDoc above functions and modules

**Note**: There is only the notation, there is not real generated docs.

## Endpoints

`GET /status`

Returns public API status

`GET /protected/status`

Returns logged in or 401

`POST /protected/users`
```
{
  "name": String,
  "avatar": String
}
```
Creates an user and returns it

`GET /protected/articles[?tags=n]`

Returns a list of articles filter by tags or the whole list
To query for several tags `?tags=tag1&tags=tag2&tags=tagN`

`GET /protected/articles/:id`
Return an article by its id.

`POST /protected/articles`
```
{
  "userId": String,
  "title": String,
  "text": String,
  "tags": [String]
}
```
Creates an article and returns it (The user must exists)

`PATCH /protected/articles/:id`
You can send the entire body or only a part
```
{
  "userId": String,
  "title": String,
  "text": String,
  "tags": [String]
}
```
Updates an article by its id and returns 204

`DELETE /protected/articles/:id`

Deletes an article by its id and returns 204

## Exceptions

Exception schema
```
{
  "errorCode": String,
  "errors": Object,
  "message": String,
  "name": String,
  "statusCode": Number
}
```

Possible Codes
```
INVALID_BODY
INVALID_PARAMS
ARTICLE_NOT_FOUND
USER_NOT_EXISTS
```

Possible body error codes
User
```
name
  NAME_MUST_BE_STRING
  NAME_REQUIRED
avatar
  AVATAR_MUST_BE_STRING
  AVATAR_REQUIRED
```
Article
```
id:
  ID_MUST_BE_STRING
  ID_REQUIRED
  ID_INVALID_FORMAT
title:
  TITLE_MUST_BE_STRING
  TITLE_REQUIRED
text:
  TEXT_MUST_BE_STRING
  TEXT_REQUIRED
tags:
  TAGS_MUST_BE_ARRAY
  TAGS_REQUIRED
  TAG_MUST_BE_STRING
userId:
  USER_ID_INVALID_FORMAT
  USER_ID_MUST_BE_STRING
  USER_ID_REQUIRED
```

## Ramda

This project uses [ramda](https://ramdajs.com/), take in count that it `curries` all the functions.
So, for example (in the article decorator) when I do:
```
toReturn: pick(DECORATORS.ARTICLE.TO_RETURN)
```
It means
```
toReturn: article => pick(DECORATORS.ARTICLE.TO_RETURN, article)
```
