// Import required modules
const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Use CORS middleware after the app is initialized
app.use(cors());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Export the app module
module.exports = app;
