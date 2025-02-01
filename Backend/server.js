const http = require('http');
const app = require('./app');

// Ensure that the port is coming from environment variables or default to 3006
const port = process.env.PORT || 3006;

// Create and start the server
const server = http.createServer(app);

server.listen(3006, () => {
    console.log(`Server is running on port ${port}`);
});
