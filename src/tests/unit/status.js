import request from "supertest";
import app from "app";
import { describe, it } from "mocha";

describe("GET /status", function () {
  it("respond with status of the API", async () => 
    await request(app)
      .get("/status")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, "API Online"));
});