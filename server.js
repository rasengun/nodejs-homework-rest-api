const mongoose = require("mongoose");

const app = require("./app");

//Gr0AtZxcVdDV4hu4

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT))
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));
