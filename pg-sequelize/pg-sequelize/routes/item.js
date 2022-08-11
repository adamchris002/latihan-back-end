const userRoute = require('express').Router();

userRoute.get('/', (req,res) => {
    res.send("Users Page");
});

module.exports = userRoute;

