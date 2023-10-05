const express = require("express");
const routerpost = express.Router();
const {
  getpost,
  createcat,
  postCreate,
  getpostId,
  updatepost,
  deletepost,
} = require("../Controllers/Post.controller.js");
const { body, param } = require("express-validator");
const {
  handleValidationErrors,
  bearerAuth,
} = require("../Middleware/Postvalidation.js");

const isValidUserDefinedId = (value) => {
  return typeof value === "string" && /^[a-zA-Z0-9-_]+$/.test(value);
};

routerpost.post(
  "/Categoryposts",
  [
    body("id").notEmpty().isString(),
    body("name").notEmpty().isString(),
    // body('category_id').notEmpty().isMongoId(),
  ],
  bearerAuth,
  handleValidationErrors,
  createcat
);

routerpost.post(
  "/posts",
  [
    body("title").notEmpty().isString(),
    body("content").notEmpty().isString(),
    // body('category_id').notEmpty().isMongoId(),
  ],
  bearerAuth,
  handleValidationErrors,
  postCreate
);

routerpost.get("/posts",bearerAuth,getpost);

routerpost.get(
  "/posts/:id",
  [param("id").custom(isValidUserDefinedId)],
  bearerAuth,
  handleValidationErrors,
  getpostId
);

routerpost.put(
  "/posts/:id",
  [
    param("id").custom(isValidUserDefinedId),
    body("title").notEmpty().isString(),
    body("content").notEmpty().isString(),
  ],
  bearerAuth,
  handleValidationErrors,
  updatepost
);

routerpost.delete(
  "/posts/:id",
  [param("id").custom(isValidUserDefinedId)],
  bearerAuth,
  handleValidationErrors,
  deletepost
);

module.exports = routerpost;
