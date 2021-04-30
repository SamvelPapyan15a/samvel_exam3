const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisterSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

RegisterSchema.set('collection','register_samvel_papyan');

module.exports = mongoose.model('Register',RegisterSchema);