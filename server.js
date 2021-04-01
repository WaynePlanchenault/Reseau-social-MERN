
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path: './config/.env'});
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//jwt
app.get('*', checkUser) //quelque soit la route on check le token de notre utilisateur
app.get('/jwtid', requireAuth, (req,res) => {
    res.status(200).send(res.locals.user._id) // renvoi trop d'informations pour l'instant
});

// routes 
app.use('/api/user', userRoutes);


// server
app.listen(process.env.port, () => {
    // Permet d'utiliser le port stocké dans le fichier .env
    console.log(`Listening on port ${process.env.PORT}`);
})