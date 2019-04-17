import request from "supertest";
import app from "app";
import sinon from "sinon";
import { describe, it, afterEach } from "mocha";
import { articlesRepository } from "app/repositories";
import { dbArticleMock } from "app/tests/unit/mocks";
const sandbox = sinon.createSandbox();

describe("DELETE /protected/articles/:id", function () {
  afterEach(function () {
    sandbox.restore();
  });

  it("when delete an article successfully, then returns status 204", async () => {
    sandbox.stub(articlesRepository, "destroy").resolves(dbArticleMock);

    return await request(app)
      .delete("/protected/articles/5cb689872d078f00904b45c1")
      .set("Authorization", "1234")
      .expect(204);
  });
  
  it("when request an article with invalid format id, then returns status 400 and errors", async () => {
    return await request(app)
      .delete("/protected/articles/test")
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

  it("when request an article with inexistent id, then returns status 404", async () => {
    sandbox.stub(articlesRepository, "destroy").resolves(null);

    return await request(app)
      .delete("/protected/articles/5cb689872d078f00904b45c1")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(404, {
        "errorCode": "ARTICLE_NOT_FOUND",
        "message": "The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.",
        "name": "NOT_FOUND",
        "statusCode": 404
      });
  });
});