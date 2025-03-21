import request from "supertest";
import { app, server } from "../server.js"; 

describe("POST /api", () => {

  afterAll((done) => {
    server.close(() => {
      console.log("Test server closed.");
      done();
    });
  });

  it("should create a new todo", async () => {
    const res = await request(app)
      .post("/api")
      .set("Content-Type", "text/plain")
      .send('{"id":"ID-TEST-CREATE","name":"Test Item Name"}');

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("body");
    expect(res.body.body).toHaveProperty("id");
    expect(res.body.body.name).toBe("Test Item Name");
  });

  it("should return 400 when request data is missing.", async () => {
    const res = await request(app).post("/api").send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty("error");
  });
});
