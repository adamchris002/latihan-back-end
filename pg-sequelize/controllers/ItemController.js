class ItemController {
    static getItems(req, res) {
        res.send("Item Page");
    }

    static getInfo(req, res) {
        res.send("Items Info");
    }
}

module.exports = ItemController;