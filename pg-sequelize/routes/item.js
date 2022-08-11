const ItemController = require('../controllers/ItemController');
const itemRoutes = require('express').Router();

itemRoutes.get('/', ItemController.getItems);
itemRoutes.get('/info', ItemController.getInfo);

module.exports = itemRoutes;

