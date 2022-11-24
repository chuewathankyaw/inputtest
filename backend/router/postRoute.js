const express = require("express");
const router = express.Router();
const { createPost, getPost } = require("../controller/postController");

router.route("/").get(getPost).post(createPost);

module.exports = {
  routers: router,
};
