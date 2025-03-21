import request from "supertest";
import { app, server } from "../server.js"; 

describe("PUT /api/:id", () => {

  afterAll((done) => {
    server.close(() => {
      console.log("Test server closed.");
      done();
    });
  });

  it("should update a todo item", async () => {
    const newItem = await request(app)
      .post("/api")
      .set("Content-Type", "text/plain")
      .send('{"id":"ID-TO-BE-Updated","name":"Created to be updated later"}');

    const id = newItem.body.body.id;

    const res = await request(app)
      .put(`/api/${id}`)
      .set("Content-Type", "text/plain")
      .send('{"isComplete":"true","name":"This is the new updated name"}');

    expect(res.statusCode).toBe(200);
    expect(res.body.body.name).toBe("This is the new updated name");
    expect(res.body.body.isComplete).toBe(true);
  });

  it("should return 404 if item not found", async () => {
    const res = await request(app)
      .put(`/api/MISSING`)
      .set("Content-Type", "text/plain")
      .send('{"isComplete":"true","name":"Trying to update an item that does not exist"}');

    expect(res.statusCode).toBe(404);
  });
});
