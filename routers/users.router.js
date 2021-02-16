const express = require("express");
const usersRouter = express.Router();
const {
  getUserByUsername,
  getAllUsers,
  postUser,
} = require("../controllers/users.controllers");

usersRouter.route("/:username").get(getUserByUsername);
usersRouter.route("/").get(getAllUsers).post(postUser);
usersRouter.use("/*", (req, res) => {
  res.status(405).send({ msg: "method not available" });
});

module.exports = usersRouter;
