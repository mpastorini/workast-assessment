import request from "supertest";
import app from "app";
import { describe, it } from "mocha";

describe("POST /protected/users", function () {
  it("when post a valid user, then returns status 200 and the created user", async () => {
    return await request(app)
      .post("/protected/users")
      .set("Authorization", "1234")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(200, { _id: 1234, name: "test", avatar: "http://test/img/test.jpg" })
  });
});