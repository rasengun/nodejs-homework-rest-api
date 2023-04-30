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
      name: "Tegsstest",
      email: "te525251st@gm23l.com",
      password: "tegssssstest",
    };

    const res = await request(app)
      .post("/api/auth/register")
      .send(registerData);

    expect(res.body.email).toBe(registerData.email);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(registerData.name);
  });
});
