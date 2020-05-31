const express = require('express');

// Creating express app
const app = express();

// Setting up port
const PORT = process.env.PORT || 8000;

// Use "public" folder to serve static assets
app.use(express.static('public'));

// Express middleware - sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen on prior defined PORT
app.listen(PORT, () => {
    console.log('Server listening on port ' + PORT);
});