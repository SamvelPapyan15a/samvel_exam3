const Register = require('../models/register');
const emailManager = require('../managers/email-manager');

class AuthCtrl{
    async add(data) {
        const {email, password} = data;
        const register = new Register({
            email, password
        });
        const result = register.save();
        await emailManager(email, "Node JS register", `Շնորհակալություն գրանցման համար`);
        return result;
    }
}

module.exports = new AuthCtrl();