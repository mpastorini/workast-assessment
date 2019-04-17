import request from "supertest";
import app from "app";
import sinon from "sinon";
import { describe, it, afterEach } from "mocha";
import { articlesRepository, usersRepository } from "app/repositories";
import { dbArticleMock } from "app/tests/unit/mocks";

const sandbox = sinon.createSandbox();

describe("PATCH /protected/articles/:id", function () {
  afterEach(function () {
    sandbox.restore();
  });

  it("when update an article successfully, then returns status 204", async () => {
    sandbox.stub(articlesRepository, "update").resolves(dbArticleMock);

    const newTestArticle = {
      title: "Example 2"
    };

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect(204);
  });
  
  it("when update an article with invalid format id, then returns status 400 and errors", async () => {
    return await request(app)
      .patch("/protected/articles/test")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_PARAMS",
        "errors": {
          "_id": "ID_INVALID_FORMAT"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });

  it("when update an article with inexistent id, then returns status 404", async () => {
    sandbox.stub(articlesRepository, "update").resolves(null);

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, {
        "errorCode": "ARTICLE_NOT_FOUND",
        "message": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
        "name": "NOT_FOUND",
        "statusCode": 404
      });
  });
  
  it("when update an article with invalid data, then returns status 400 and errors", async () => {
    const newTestArticle = {
      userId: 1234,
      title: 1234,
      text: 1234,
      tags: 1234
    };

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "userId": "USER_ID_MUST_BE_STRING",
          "title": "TITLE_MUST_BE_STRING",
          "text": "TEXT_MUST_BE_STRING",
          "tags": "TAGS_MUST_BE_ARRAY"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });

  it("when update an article with invalid tag element, then returns status 400 and errors", async () => {
    const newTestArticle = {
      tags: ["example", 123]
    };

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "tags": {
            "1": "TAG_MUST_BE_STRING"
          }
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });

  it("when update an article with invalid user id format, then returns status 400 and errors", async () => {
    const newTestArticle = {
      userId: "test"
    };

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "userId": "USER_ID_INVALID_FORMAT"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });

  it("when update an article with a non existent user id, then returns status 400 and error", async () => {
    sandbox.stub(usersRepository, "get").resolves(null);

    const newTestArticle = {
      userId: "5cb689872d078f00904b45c0",
      title: "Example title",
      text: "Example text",
      tags: ["example", "interesting"]
    };

    return await request(app)
      .patch("/protected/articles/5cb689872d078f00904b45c1")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "USER_NOT_EXISTS",
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });
});