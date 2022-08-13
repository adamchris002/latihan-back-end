#CATETAN PG-SEQUELIZE

#1. Buat Folder dengan nama pg-sequelize dan menjalakan code npm init -y

```
mkdir pg-sequelize

// masuk ke folder tersebut dengan menggunakan cd pg-sequelize untuk menjalankan code npm init -y

cd pg-sequelize
npm init -y
```

#2. 1nstall express, nodemon, pg (postgre), sequelize, dan sequelize-cli

```
//proses penginstallan bisa langsung semua atau satu-persatu

npm i express nodemon pg sequelize sequelize-cli

// atau

npm install express
npm install nodemon
npm install pg
npm install sequelize
npm install sequelize-cli
```

#Catetan

```
// pada file config.json jangan lupa untuk mengganti username dan password menjadi yang sesuai di dbeaveratau ssms
//serta jangan lupa untuk mengganti dialect menjadi postgre
```

#3. Buatlah file app.js dan file .gitignore

```
code .gitignore
code app.js

//jangan lupa untuk memasukkan node_modules dan package-lock.json ke dalam file .gitignore
```

#4. Masukkanlah code berikut dalam file app.js

```
//ini adalah code yang digunakan untuk mengimport express yang akan digunakan untuk membuat api
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
```

#Catetan:

```
//buat folder views, controllers, dan routes

mkdir views, controllers, routes
```

#5. Buatlah item.js dan user.js di folder routes

```
cd routes
code index.js
code item.js
code user.js
```

#6. Buatlah file ItemController.js dan UserController.js

```
cd controllers
code ItemController.js
code UserController.js
```

#7. Masukkan code berikut pada file index.js

```
const routes = require('express').Router();
const ItemRoutes = require("./item");
const userRoutes = require("./user");

routes.get("/", (req, res) => {
    res.send("ini adalah halaman paling awal");
});

routes.use("/users", userRoutes);
routes.use("/items", ItemRoutes);
module.exports = routes;
```

#8. Masukkan code berikut pada file item.js

```
//code yang wajib dimasukkan ke dalam model item.js

const ItemController = require('../controllers/ItemController');
const itemRoutes = require('express').Router();

//routes untuk item
itemRoutes.get('/' ItemController.getItems);
itemRoutes.get('/info', ItemController.getInfo);

module.exports = itemRoutes;
```

#9. Masukkan code berikut pada file user.js

```
//code yang wajib dimasukkan ke dalam model user.js

cosnt UserController = require(../controllers/UserController);
cosnt userRoutes = require('express').Router();

//routes untuk users
userRoutes.get('/', UserController.getUser);
userRoutes.get('/info', UserController.getInfo);

module.exports = userRoutes;
```

#10. Masukkan code berikut pada file ItemController.js

```
class ItemController {
    static getItems(req, res) {
        res.send("Item Page");
    }

    static getInfo(req, res) {
        res.send("Items Info");
    }
}

module.exports = ItemController;
```

#11. Masukkan code berikut pada file UserController.js

```
class UserController {
    static getUsers(req ,res) {
        res.send("Users Page");
    }
    
    static getInfo(req, res) {
        res.send("User Info");
    }
}

module.exports = UserController;
```

#12. Masukkan dalam teriminal npx sequelize-cli init

```
npx sequelize-cli init

// untuk instalasi sequelize
// untuk membuat folder migrations, seeders, dan config
// untuk menghubungkan ke postgres

#file Config.json
// folder config adalah untuk menghubungkan ke database
```

#13. Masukkan dalam terminal npx sequelize-cli db:create

```
npx sequelize-cli db:create

//untuk membuat database
```

#Catetan untuk Dbeaver

```
1. hapus kalau yang di database adalah Sqlite
2. buat connection baru dengan postgre SQL
3. username yang digunakan adalah postgres
4. password yang digunakan adalah admin
5. kemudian pada tab PostgreSQL tick show all database untuk menampilkan database yang sudah dibuat pada vscode
```

#14. Membuat table
a. membuat migrations
```
//ketik pada terminal

npx sequelize-cli model:generate --name users --attributes username:string,email:string,password:string,image:string   

npx sequelize-cli model:generate --name items --attributes name:string,price:integer,stock:integer,image:string
```

b. migrasikan table

```
npx sequelize-cli db:migrate
```

#Catetan untuk folder models
```
//jangan lupa untuk mengganti penamaan nama yang ada di dalam masing-masing model menjadi singular, karena untuk pembuatan class bersifat singular
```

#Untuk menampilkan dan menambahkan data dari body postman

```
static getUsers(req, res) {
    user
        .findAll()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

static addData(req, res) {
    const {username, email, password, image} = req.body
    //req.body adalah untuk mendapatkan data yang dimasukkan pada body di postman
    user
        .create({
            username, email, password, image,
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        })
}

//jangan lupa untuk menambahkan command di routes.
```

#Untuk select specific data dan menggunakan conditional

```
static getInfo(req, res) {
    const id = Number(req.params.id);

    user.findByPk(id);
    .then((result) => {
        if (!result) {
            res.send({
                message: `ID ${id} is not found"
            })
        }
        else {
            res.send(result);
        }
    })
    .catch((err) => res.send(err));
}

//atau

static findByEmail(req, res) {
    const email = req.params.email

    user.findOne()
}
```

#Untuk menghapus data dari database

```
static delete(req, res) {
    const id = Number(req.params.id)

    user
        .destroy({
            where: {
                id
            }
        })
        .then((result) => {
            if (result) {
                res.send(`ID ${id} is deleted`);
            }
            else {
                res.send(`ID ${id} is not found`);
            }
        })
        catch((err) => {
            res.send(err);
        })
}
```

