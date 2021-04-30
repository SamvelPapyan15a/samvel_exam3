const Users = require('../models/users');
const emailManager = require('../managers/email-manager');

class UsersCtrl{
    async add(data){
        const { username, name, email, password } = data;
        if(await Users.findOne({username})){
            throw new Error("User with this username is exists");
        }
        const user = new Users({
            username, name, email, password
        });
        const result = user.save();
        await emailManager(email, "Node JS register", `Շնորհակալություն գրանցման համար`);
        return result;
    }
    async delete(id){
        if(!await Users.findById(id)){
            throw new Error("User not exists");
        }
        return Users.findByIdAndDelete(id);
    }
}

module.exports = new UsersCtrl();