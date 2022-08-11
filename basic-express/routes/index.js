const routes = require('express').Router();
//.Router() digunakan agar di index.js bisa menggunakan .use();

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.get('/user', (req, res) => {
    res.send('Ini halaman User!');
})

routes.get('/items', (req, res) => {
    res.send('Ini halaman Items!');
})


module.exports = routes;