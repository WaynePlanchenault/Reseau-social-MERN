const bodyParser = require('body-parser');
const express = require('express');
// const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes 
app.use('/api/user', userRoutes);


// server
app.listen(process.env.port, () => {
    // Permet d'utiliser le port stocké dans le fichier .env
    console.log(`Listening on port ${process.env.PORT}`);
})