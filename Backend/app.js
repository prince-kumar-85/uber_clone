// Import required modules
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const cookiesParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();

// Use middlewares
app.use(cookiesParser()); // For cookie parsing
app.use(express.json()); // For parsing JSON bodies
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies
app.use(cors()); // For enabling cross-origin resource sharing

// Connect to the database (MongoDB in this case)
const connectToDb = require('./db/db');
connectToDb();

// Define a route to check if the server is working
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use the routes for users and captains
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

// Export the app module to use it in other files (like server.js)
module.exports = app;
