import request from "supertest";
import { app, server } from "../server.js"; 

describe("DELETE /api/:id", () => {
  afterAll((done) => {
    server.close(() => {
      console.log("Test server closed.");
      done();
    });
  });

  it("should delete a todo item", async () => {
    const newItem = await request(app)
      .post("/api")
      .set("Content-Type", "text/plain")
      .send('{"id":"ID-TEST-DELETE","name":"Test Delete Item Name"}');

    const id = newItem.body.body.id;

    const res = await request(app).delete(`/api/${id}`);
    expect(res.statusCode).toBe(200);
  });

  it("should return 404 if item not found", async () => {
    const res = await request(app).delete(`/api/invalidID`);
    expect(res.statusCode).toBe(404);
  });
});
