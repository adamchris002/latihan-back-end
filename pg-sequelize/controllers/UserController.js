class UserController {
    static getUsers(req ,res) {
        res.send("Users Page");
    }
    
    static getInfo(req, res) {
        res.send("User Info");
    }
}

module.exports = UserController;