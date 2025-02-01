// Import required modules
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

// Load environment variables from .env file
dotenv.config();

const connectToDb = require('./db/db');

connectToDb();

// Initialize express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use CORS middleware after the app is initialized
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use the correct route
app.use('/users', userRoutes);

// Export the app module
module.exports = app;
