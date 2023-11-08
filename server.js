
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());



app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Server error' });
        } else {
            const users = JSON.parse(data);
            const user = users.users.find(u => u.username === username && u.password === password);

            if (user) {
               
                res.status(200).json({ success: 'Authentication successful' });
            } else {
                
                res.status(401).json({ error: 'Invalid username or password' });
            }
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});














