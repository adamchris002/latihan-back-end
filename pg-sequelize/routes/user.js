const UserController = require("../controllers/UserController");
const userRoutes = require("express").Router();

userRoutes.get('/', UserController.getUsers);
userRoutes.get("/info", UserController.getInfo);

module.exports = userRoutes;
