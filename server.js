const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Simple in-memory database (not suitable for production)
const users = [
    { id: 1, username: 'Divya', password: '999' },
    { id: 2, username: 'Chu', password: 'abcd' },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (your HTML, CSS, etc.)
app.use(express.static('public'));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists in the database
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
