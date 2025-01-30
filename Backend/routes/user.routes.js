const express= require('express');
// const { model } = require('mongoose');
const router = express.Router();
const {body}= require('express-validator')

const userController=require('../controllers/user.controller');

router.post('./register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First_name must have at least 3 character'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
    userController.registerUser
)


module.exports= router