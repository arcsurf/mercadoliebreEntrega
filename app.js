const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname, 'public');
const PORT = 3000;

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.listen(process.env.PORT || 3000, function() {
    console.log("El servidor se encuentra activo sobre la URL: http://localhost:" + PORT + " o sobre http://127.0.0.1:" + PORT)
})