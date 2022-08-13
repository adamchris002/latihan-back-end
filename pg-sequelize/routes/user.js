const UserController = require("../controllers/UserController");
const userRoutes = require("express").Router();

userRoutes.get("/", UserController.getUsers);
userRoutes.post("/add", UserController.addData);
userRoutes.get("/info/:id", UserController.getInfo);
userRoutes.get("/email/:email", UserController.findByEmail);
userRoutes.delete("/delete/:id", UserController.deleteData);
userRoutes.post("/update/:id", UserController.updateData);

module.exports = userRoutes;
