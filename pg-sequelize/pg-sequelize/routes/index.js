const route = require('express').Router()

route.get('/', (req,res) => {
    res.send("Selamat pagi guys");
});

module.exports = route;