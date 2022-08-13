# CATETAN UNTUK MATERI EJS

## 1. Buatlah file index.ejs di folder views

```
code index.ejs
```
#2. Install ejs di terminal

```
npm install ejs
```

## 3. HTML di file index.ejs

```html
<!-- ketiklah pada file tersebut html:5 agar muncul head dan body html -->

```<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan-EJS</title>
</head>
<body>
    
</body>
</html>
```
## 4. Pada folder routes file index.js pada routes.get('/') harus diganti menjadi render

```html
routes.get("/", (req, res) => {
    res.render('index.ejs');
})
```

## 5. Masukkan Bootstrap CSS dan JavaScript ke file index.ejs

```html
//untuk bootstrap CSS harus dimasukkan di bagian head

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Latihan-EJS</title>
    <!-- CSS Bootstrap -->
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
</head>

<!-- //untuk bootstrap JavaScript harus dimasukkan ke body -->

<body>
    <h1>Halo!</h1>
    <hr/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae unde, velit fuga ducimus facere quos eaque, vero non necessitatibus saepe explicabo consequatur numquam nesciunt ratione odio ipsum, laudantium rerum porro! Autem dicta suscipit labore voluptatum omnis maiores distinctio amet vitae cumque ad? Deleniti iste, ipsa dolores aliquid commodi voluptas nobis repellat libero vitae sit sint, atque aspernatur, dicta voluptates modi delectus. Error cupiditate veniam reiciendis mollitia quo, tempora rem! Quis iusto expedita, molestiae maiores nesciunt ea quia adipisci earum sint beatae velit! Consequatur commodi ullam deserunt ipsa ut dolorem voluptas vitae soluta tenetur ipsam. Repellat dicta ipsam laboriosam commodi optio blanditiis dolorem adipisci, vitae omnis nisi tempora nobis illum dolore aperiam quibusdam mollitia inventore assumenda eius ad impedit facilis! Ea, ex. Mollitia accusantium quia illo quasi deserunt ipsa ab molestiae voluptas nihil voluptatem quidem natus harum tenetur at ut quae accusamus maxime nostrum, rem neque? Ipsum numquam dolorem quibusdam quisquam sapiente veritatis velit illo labore, at id, doloremque repellendus! Et voluptate maiores, deserunt eius repudiandae veniam, dignissimos repellendus autem modi explicabo assumenda id neque consequuntur. Odio quo quaerat beatae vel perferendis iure, ducimus voluptatibus possimus, ipsa architecto non libero labore. Quas libero distinctio itaque, perferendis odio ad ut aut saepe.</p>

    <!-- JS Bootstrap -->
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
</body>
```

## 6. Button
agar button bisa pindah ke halaman lain maka dari index.ejs harus ditambahkan a href dengan class button.

```html
<div class="container text-center">
    <h1>Halo!</h1>
    <p>halo nama saya Adam</p>
    <hr/>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae unde, velit fuga ducimus facere quos eaque, vero non necessitatibus saepe explicabo consequatur numquam nesciunt ratione odio ipsum, laudantium rerum porro! Autem dicta suscipit labore voluptatum omnis maiores distinctio amet vitae cumque ad? Deleniti iste, ipsa dolores aliquid commodi voluptas nobis repellat libero vitae sit sint, atque aspernatur, dicta voluptates modi delectus. Error cupiditate veniam reiciendis mollitia quo, tempora rem! Quis iusto expedita, molestiae maiores nesciunt ea quia adipisci earum sint beatae velit! Consequatur commodi ullam deserunt ipsa ut dolorem voluptas vitae soluta tenetur ipsam. Repellat dicta ipsam laboriosam commodi optio blanditiis dolorem adipisci, vitae omnis nisi tempora nobis illum dolore aperiam quibusdam mollitia inventore assumenda eius ad impedit facilis! Ea, ex. Mollitia accusantium quia illo quasi deserunt ipsa ab molestiae voluptas nihil voluptatem quidem natus harum tenetur at ut quae accusamus maxime nostrum, rem neque? Ipsum numquam dolorem quibusdam quisquam sapiente veritatis velit illo labore, at id, doloremque repellendus! Et voluptate maiores, deserunt eius repudiandae veniam, dignissimos repellendus autem modi explicabo assumenda id neque consequuntur. Odio quo quaerat beatae vel perferendis iure, ducimus voluptatibus possimus, ipsa architecto non libero labore. Quas libero distinctio itaque, perferendis odio ad ut aut saepe.</p>
    <a href="/" class="btn btn-sm btn-primary">Home</a>
    <a href="/users" class="btn btn-sm btn-primary">Users</a>
    <a href="/items" class="btn btn-sm btn-primary">Items</a>
    <hr/>
</div>

```

## 7. Pada user Controller harus diganti mejadi .render

```javascript
static getUsers(req ,res) {
    user
        .findAll({
            order: [
                ['id', 'asc']
            ]
        })
        .then((result) => {
            res.render("users/home.ejs", {user: result});
            // res.send(result);
        })
        //.then akan memasukkan hasil dari proses sebelumnya yaitu dalam contoh ini adalah findAll();
        .catch((err) => {
            res.send(err);
        })
}
//pastikan hanya ada 1 res saja
```

