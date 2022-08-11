const userRoute = require("express").Router();

userRoute.get('/', (req, res) => {
    res.send("ini adalah halaman User");
});
    

