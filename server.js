const express = require('express');
require('dotenv').config({path: './config/.env'})
const app = express();

// Permet d'utiliser le port stocké dans le fichier .env
app.listen(process.env.port, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})