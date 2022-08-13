const {user} = require('../models');

class UserController {
    static getUsers(req ,res) {
        user
            .findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            .then((result) => {
                res.send(result);
            })
            //.then akan memasukkan hasil dari proses sebelumnya yaitu dalam contoh ini adalah findAll();
            .catch((err) => {
                res.send(err);
            })
    }
    static addData(req, res) {
        const {username, email, password, image} = req.body;
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

    static updateData(req, res) {
        const id = req.params.id;
        const {username, email, password, image} = req.body;

        user
            .update({
                username,
                email,
                password,
                image,
            },
            {
                where: {
                    id
                },
            })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => res.send(err));
            
        
    }

    static deleteData(req, res) {
        const id = Number(req.params.id);

        user
            .destroy({
                where: {
                    id
                }
            })
            .then((result) => {
                if (result) {
                    res.send(`ID ${id} has been deleted`);
                }
                else {
                    res.send(`ID ${id} does not exist`);
                }

            })
            .catch((err) => res.send(err));
    }

    static getInfo(req, res) {
        const id = Number(req.params.id)

        user.findByPk(id)
        .then((result) => {
            if (!result) {
                res.send({
                    message: `ID ${id} is not found`,
                })
            }
            else {
                res.send(result);
            }
            
        })
        .catch((err) => res.send(err));
    }

    static findByEmail(req,res) {
        const email = req.params.email

        user.findOne({
            where: {
                email
            }
        })
        .then((result) => {
            res.send(result);
        })
        .catch((result) => {
            res.send(err);
        })
    }
}

module.exports = UserController;