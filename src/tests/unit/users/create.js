import request from "supertest";
import app from "app";
import sinon from "sinon";
import { describe, it, afterEach } from "mocha";
import { usersRepository } from "app/repositories";
import { createUserMock } from "app/tests/unit/mocks";

const sandbox = sinon.createSandbox();

describe("POST /protected/users", function () {
  afterEach(function () {
    sandbox.restore();
  });

  it("when post a valid user, then returns status 200 and the created user", async () => {
    sandbox.stub(usersRepository, "create").resolves(createUserMock);

    const newTestUser = {
      name: "test",
      avatar: "http://test/img/test.jpg"
    };

    return await request(app)
      .post("/protected/users")
      .send(newTestUser)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, createUserMock);
  });

  it("when post an invalid user, then returns status 400 and errors", async () => {
    sandbox.stub(usersRepository, "create").resolves(createUserMock);

    const newTestUser = {
      name: 1234,
      avatar: 1234
    };

    return await request(app)
      .post("/protected/users")
      .send(newTestUser)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "avatar": "MESSAGE_MUST_BE_STRING",
          "name": "NAME_MUST_BE_STRING"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });

  it("when post an empty user, then returns status 400 and errors", async () => {
    sandbox.stub(usersRepository, "create").resolves(createUserMock);

    const newTestUser = {};

    return await request(app)
      .post("/protected/users")
      .send(newTestUser)
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(400, {
        "errorCode": "INVALID_BODY",
        "errors": {
          "avatar": "MESSAGE_REQUIRED",
          "name": "NAME_REQUIRED"
        },
        "message": "The server cannot or will not process the request due to an apparent client error.",
        "name": "BAD_REQUEST",
        "statusCode": 400
      });
  });
});