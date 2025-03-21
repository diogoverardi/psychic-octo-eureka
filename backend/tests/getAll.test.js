import request from "supertest";
import { app, server } from "../server.js"; 

describe("GET /api", () => {
  afterAll((done) => {
    server.close(() => {
      console.log("Test server closed.");
      done();
    });
  });

  it("should return all items from the database.", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.body)).toBe(true);
  });
});
