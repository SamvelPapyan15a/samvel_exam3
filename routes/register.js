const express = require('express');
const router = express.Router();
const AuthCtrl = require('../controllers/auth.ctrl');

router.route('/').post(
    async(req,res)=>{
        try{
            const registerInfo = await AuthCtrl.add({
                email:req.body.email,
                password:req.body.password
            });
            res.json({
                success:true,
                data:registerInfo,
                message:"Register is added"
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