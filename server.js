const mongoose = require("mongoose");

const app = require("./app");

//Gr0AtZxcVdDV4hu4

const DB_HOST =
  "mongodb+srv://Matvey:Gr0AtZxcVdDV4hu4@cluster0.4lgqgn7.mongodb.net/contacts_book?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(3000))
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));
