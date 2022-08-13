const ItemController = require('../controllers/ItemController');
const itemRoutes = require('express').Router();

itemRoutes.get("/", ItemController.getItems);
itemRoutes.post("/add", ItemController.addItem);
itemRoutes.get("/info/:id", ItemController.getInfo);
itemRoutes.get("/name/:name", ItemController.findByName);
itemRoutes.delete("/delete/:id", ItemController.deleteData);
itemRoutes.post("/update/:id", ItemController.updateData);

module.exports = itemRoutes;

