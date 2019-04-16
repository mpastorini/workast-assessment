import request from "supertest";
import app from "app";
import { describe, it } from "mocha";

describe("GET /protected/users", function () {
  it("When request protected status with valid token, then return 401", async () =>
    await request(app)
      .get("/protected/status")
      .set("Authorization", "1234")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, "Logged in")
  );
  it("When request protected status with invalid token, then return 401", async () =>
    await request(app)
      .get("/protected/status")
      .set("Authorization", "4321")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(401, { name: "UNAUTHORIZED", "message": "Invalid token", "statusCode": 401})
  );
  it("When request protected status without token, then return 401", async () =>
    await request(app)
      .get("/protected/status")
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(401, { name: "UNAUTHORIZED", "message": "Token required", "statusCode": 401})
  );
});