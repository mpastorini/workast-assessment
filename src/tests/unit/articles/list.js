import request from "supertest";
import app from "app";
import sinon from "sinon";
import { describe, it, afterEach } from "mocha";
import { articlesRepository } from "app/repositories";
import { dbArticleMock } from "app/tests/unit/mocks";

const sandbox = sinon.createSandbox();

describe("GET /protected/articles[?tags=]", function () {
  afterEach(function () {
    sandbox.restore();
  });

  it("when request articles, then returns status 200 and the articles", async () => {
    sandbox.stub(articlesRepository, "list").resolves([dbArticleMock]);

    return await request(app)
      .get("/protected/articles")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{
        _id: "5cb689872d078f00904b45c1",
        userId: "5cb689872d078f00904b45c0",
        title: "Example title",
        text: "Example text",
        tags: ["example", "interesting"]
      }]);
  });

  it("when request articles by a single tag, then returns status 200 and articles", async () => {
    sandbox.stub(articlesRepository, "listByTags").resolves([dbArticleMock]);

    return await request(app)
      .get("/protected/articles?tags=test")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{
        _id: "5cb689872d078f00904b45c1",
        userId: "5cb689872d078f00904b45c0",
        title: "Example title",
        text: "Example text",
        tags: ["example", "interesting"]
      }]);
  });

  it("when request articles by multiple tags, then returns status 200 and articles", async () => {
    sandbox.stub(articlesRepository, "listByTags").resolves([dbArticleMock]);

    return await request(app)
      .get("/protected/articles?tags=test&tags=test")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, [{
        _id: "5cb689872d078f00904b45c1",
        userId: "5cb689872d078f00904b45c0",
        title: "Example title",
        text: "Example text",
        tags: ["example", "interesting"]
      }]);
  });
});