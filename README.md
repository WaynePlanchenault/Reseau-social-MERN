npm init -y // télécharge le package.json en disant oui à tout

npm i --save express nodemon dotenv // télécharge le microframwork express + nodemon (// comme si on tapait nodemon server mais on tape juste npm start)
// pour le lancement de serveur et l'actualisation automatique et dotenv pour stocker des variables d'environnement

npm i -s mongoose // bibliothèque qui permet de travailler avec mongodb

npm i -s validator // biblio pour demander des validations

npm i -s body-parser // il semblerait que ce soit inutile depuis la version 4.16 d'express

npm i -s bcrypt // permet d'encrypter les MDP

npm i -s jsonwebtoken // permet d'utiliser des token pour sécuriser la connexion utilisateur

npm i -s cookie-parser // permet de récupérer req.cookie

npm i -s multer // gestion upload d'images
npm i multer@2.0.0-rc.1 // version plus récente de multer

npm i -s cors // permet de gérer les autorisation de requêtes
