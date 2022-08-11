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

#3. Buatlah file app.js dan file .gitignore

```
code .gitignore
code app.js

//jangan lupa untuk memasukkan node_modules dan package-lock.json ke dalam file .gitignore
```

#4. Masukkanlah code berikut dalam file app.js

```
const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});
```

#5. Buatlah item.js dan user.js di folder routes

```
cd routes
code item.js
code user.js
```

#6. Buatlah file ItemController.js dan UserController.js

```
cd controllers
code ItemController.js
code UserController.js
```

#7. 