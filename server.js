const express = require('express');
const cors = require('cors');
const app = express();

// Security middleware to allow your HTML app to talk to this server
app.use(cors());
app.use(express.json());

// 🔒 SECURE DATABASE
// Because this runs on a secure server, nobody can "Inspect Element" to see these!
const users = {
    'junly_admin': { pass: 'Welcome2WJ!', role: 'admin' },
    'PS_user': { pass: 'user', role: 'user' }
};

// Listen for Login Requests from the HTML App
app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the credentials match
    if (users[username] && users[username].pass === password) {
        console.log(`[AUTH SUCCESS] User logged in: ${username}`);
        
        // Give the user a secret "Unlock Token" so the HTML app knows they are legit
        res.json({ 
            success: true, 
            role: users[username].role, 
            token: 'secure_junly_auth_token_9x8A2b' 
        });
    } else {
        console.warn(`[AUTH FAILED] Failed attempt for user: ${username}`);
        res.status(401).json({ 
            success: false, 
            message: 'Invalid username or password' 
        });
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🔐 Junly Secure Backend is running on port ${PORT}`);
});