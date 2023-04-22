const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const { PORT, DB_HOST_TEST } = process.env;

describe("test /api/auth/register route", () => {
  let server = null;
  beforeAll(async () => {
    server = app.listen(PORT);
    await mongoose.connect(DB_HOST_TEST);
  });

  afterAll(async () => {
    server.close();
    await mongoose.connection.close();
  });

  test("test register route with correct data", async () => {
    const registerData = {
      name: "Testtest",
      email: "testtest@gmail.com",
      password: "test123test",
    };

    const res = await request(app)
      .post("/api/auth/register")
      .send(registerData);

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(registerData.name);
    expect(res.body.email).toBe(registerData.email);
  });
});
