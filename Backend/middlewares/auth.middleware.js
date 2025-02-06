const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//create a middleware function to authenticate the user

module.exports.authUser=async(req,res,next)=>{
    //get the token from the header
    const token=req.headers.authorization.split(' ')[ 1 ] || req.cookies.token;
    //check if token is not present
    if(!token){
        return res.status(401).json({msg:'No token, authorization denied'});
    }
    try{
        //verify the token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        //find the user with the id from the token
        const user=await userModel.findById(decoded._id)
        req.user=user;
        return next();

    }catch(err){
        return res.status(401).json({msg:'Token is not valid'});
    }
}