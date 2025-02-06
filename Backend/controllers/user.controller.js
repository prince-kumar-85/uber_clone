const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
    const errors = validationResult(req); // Corrected 'req' instead of 'res'
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    
    // Hash password before using it
    const hashedPassword = await userService.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    // if user is found and password is correct, create a token
    const token = user.generateAuthToken();

    res.status(201).json({ token, user });
};

module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req); // Corrected 'req' instead of 'res'
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(401).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return res.status(401).json({ msg: 'Invalid email or password' });
    }

    // if user is found and password is correct, create a token
    const token = user.generateAuthToken();

    //adding the cookie token to the response
    res.cookie('token', token, {
        maxAge: 3600000, // 1 hour
        // secure: process.env.NODE_ENV==='production', // set to true if your using https
        httpOnly: true,
    });

    res.status(200).json({ token, user });
};


module.exports.getUserProfile = async (req, res, next) => {
    // const user = await userModel.findById(req.user._id);
    // if (!user) {
    //     return res.status(404).json({ msg: 'User not found' });
    // }

    res.status(200).json(req.user);
};
