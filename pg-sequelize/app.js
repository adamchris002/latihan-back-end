const express = require('express');
const app = express();
const port = 3000;

//untuk mengubah menjadi json
app.use(express.json());
//untuk body di postman
app.use(express.urlencoded({extended: true}));

const routes = require('./routes');
app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});