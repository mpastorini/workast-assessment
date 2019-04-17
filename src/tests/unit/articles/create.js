import request from "supertest";
import app from "app";
import sinon from "sinon";
import { describe, it, afterEach } from "mocha";
import { articlesRepository, usersRepository } from "app/repositories";
import { dbUserMock, dbArticleMock } from "app/tests/unit/mocks";

const sandbox = sinon.createSandbox();

describe("POST /protected/articles", function () {
  afterEach(function () {
    sandbox.restore();
  });

  it("when post a valid article, then returns status 200 and the created article", async () => {
    sandbox.stub(usersRepository, "get").resolves(dbUserMock);
    sandbox.stub(articlesRepository, "create").resolves(dbArticleMock);

    const newTestArticle = {
      userId: "user1",
      title: "Example title",
      text: "Example text",
      tags: ["example", "interesting"]
    };

    return await request(app)
      .post("/protected/articles")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, {
        _id: "article1",
        userId: "user1",
        title: "Example title",
        text: "Example text",
        tags: ["example", "interesting"]
      });
  });

  it("when post an invalid article, then returns status 400 and errors", async () => {
    const newTestArticle = {
      userId: 1234,
      title: 1234,
      text: 1234,
      tags: 1234
    };

    return await request(app)
      .post("/protected/articles")
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

  it("when post an invalid tag element, then returns status 400 and errors", async () => {
    const newTestArticle = {
      userId: "user1",
      title: "Example title",
      text: "Example text",
      tags: ["example", 123]
    };

    return await request(app)
      .post("/protected/articles")
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

  it("when post an empty article, then returns status 400 and errors", async () => {
    const newTestArticle = {};

    return await request(app)
      .post("/protected/articles")
      .send(newTestArticle)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "userId": "USER_ID_REQUIRED",
          "title": "TITLE_REQUIRED",
          "text": "TEXT_REQUIRED",
          "tags": "TAGS_REQUIRED"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });
});