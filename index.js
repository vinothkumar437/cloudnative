const express = require('express');
const app = express();
const PORT = 3000;

// Variable to keep track of active users
let activeUsers = 0;
const MAX_USERS = 3;

// Middleware to check user limit
const userLimitMiddleware = (req, res, next) => {
    if (activeUsers < MAX_USERS) {
        activeUsers++;
        console.log(`User connected. Active users: ${activeUsers}`);
        next();
    } else {
        res.status(403).send('Access denied. Maximum user limit reached.');
    }
};

// Route to handle user access
app.get('/', userLimitMiddleware, (req, res) => {
    res.send('Welcome to the application!');
});

// Route to handle user disconnect
app.post('/disconnect', (req, res) => {
    if (activeUsers > 0) {
        activeUsers--;
        console.log(`User disconnected. Active users: ${activeUsers}`);
    }
    res.send('User disconnected.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
