# Latihan-back-end

## Langkah Pembuatan

1. Buat _package.json_ dengan cara

```bash
npm init -y
```

2. Install package yang diperlukan

```bash
npm install expresss

// dan

npm install nodemon
```

3. Buatlah file bernama .gitignore

sehingga ketika nanti project di push ke github tidak akan memasukkan node_modules dan package-lock.json

```bash
node_modules
package-lock.json
``` 

4. Buatlah folder views, controllers, dan routes

```bash
mkdir views, controllers, routes
```

5. Buatlah file bernama index.js di routes dan isilah dengan kode berikut

```bash
const routes = require('express').Router();
//.Router() digunakan agar di index.js bisa menggunakan .use();

//dan kemudian bisa diisi dengan command-command lain di routes

routes.get('/', (req, res) => {
  res.send('Hello World!')
})

routes.get('/user', (req, res) => {
    res.send('Ini halaman User!');
})

routes.get('/items', (req, res) => {
    res.send('Ini halaman Items!');
})

//jangan lupa untuk mengeksport file tersebut
module.exports = routes;
```

6. Buatlah file bernama app.js

```bash
const express = require('express')
const app = express()
const port = 3000

//code diatas adalah template yang harus dimasukkan di dalam app.js

const routes = require('./routes');

//code diatas ini untuk memanggil routes dari folder routes

app.use(routes);
//.get adalah salah satu HTTP method untuk request

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//app.listen berguna untuk menjalankan server
```




