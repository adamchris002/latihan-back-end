const routes = require('../../../basic-express/routes');

const route = require('express').Router()

route.use("/users", userRoutes);
routes.use("/items", ItemRoutes);
module.exports = route;