const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const { bearerAuth } = require("./Middleware/Postvalidation");
// require("./dbConfig.js")
const routerpost = require("./Routes/Route.js");
const PostController = require("./Controllers/Post.controller.js");

require("./dbConfig.js");
env.config();


app.use("/api", routerpost);
app.use(express.json());
app.get("/", bearerAuth, (req, res, next) => {
  res.status(200).json({
    message: "hello i am from Blog API..",
  });
});

app.all("/*", (req, res, next) => {
  res.status(200).json({
    message: "route not found...",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

module.exports = app;
