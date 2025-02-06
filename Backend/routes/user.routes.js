const express = require('express');
const router = express.Router();
const { body } = require('express-validator');

const authMiddleware = require('../middlewares/auth.middleware');  // Correct path

// Ensure the correct path is used to import the controller
const userController = require('../controllers/user.controller');  // Correct path

// Register route
router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must have at least 3 characters'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.registerUser);

// Login route
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], 
    userController.loginUser
);


router.get('/profile', authMiddleware.authUser  ,userController.getUserProfile);

router.get('/logout', authMiddleware.authUser  ,userController.logoutUser);

module.exports = router;
