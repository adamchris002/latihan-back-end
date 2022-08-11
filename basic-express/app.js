const express = require('express')
const routes = require('./routes'); //mengimport dari folder routes
const app = express()
const port = 3000

app.use(routes);
//.get adalah salah satu HTTP method untuk request
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
//app.listen berguna untuk menjalankan server

