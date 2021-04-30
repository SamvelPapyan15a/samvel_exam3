const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/users.ctrl');

router.route('/').post(
    async(req,res)=>{
        try{
            const userInfo = await UsersCtrl.add({
                username:req.body.username,
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });
            res.json({
                success:true,
                data:userInfo,
                message:"User created"
            });
        }
        catch (e) {
            res.json({
                success:false,
                data:null,
                message:e.message
            });
        }
    }
);

router.route("/:id").delete(
    async(req,res)=>{
        try{
            const deletedUser = await UsersCtrl.delete(req.params.id);
            res.json({
                success:true,
                data:deletedUser,
                message:"User deleted"
            });
        }
        catch (e) {
            res.json({
                success:false,
                data:null,
                message:e.message
            });
        }
    }
);

module.exports = router;