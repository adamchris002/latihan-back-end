const {item} = require('../models');

class ItemController {
    static getItems(req ,res) {
        item
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
    static addItem(req, res) {
        const {name, price, stock, image} = req.body;
        item
            .create({
                name, price, stock, image,
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
        const {name, price, stock, image} = req.body;

        item
            .update({
                name, price, stock, image,
            },
            {
                where: {
                    id
                },
            })
            .then((result) => {
                if(result[0] === 1) {
                    res.send(`id of ${id} has been updated`);
                }
                else {
                    res.send(`id of ${id} does not exist`);
                }
            })
            .catch((err) => res.send(err));
            
        
    }

    static deleteData(req, res) {
        const id = Number(req.params.id);

        item
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

        item.findByPk(id)
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

    static findByName(req,res) {
        const name = req.params.name

        item.findOne({
            where: {
                name
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

module.exports = ItemController;