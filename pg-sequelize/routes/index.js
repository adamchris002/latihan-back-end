const routes = require('express').Router();
const ItemRoutes = require("./item");
const userRoutes = require("./user");

routes.get("/", (req, res) => {
    res.render('index.ejs');
    // res.send("ini adalah halaman paling awal");
});

routes.use("/users", userRoutes);
routes.use("/items", ItemRoutes);
module.exports = routes;