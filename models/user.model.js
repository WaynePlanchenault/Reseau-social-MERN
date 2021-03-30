//déclare à quoi va ressembler la bdd de l'utilisateur
const mongoose = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new mongoose.Schema(
    {
        pseudo: {
            type: String,
            required: true,
            mingLength: 3,
            maxLength: 55,
            unique: true,
            trim: true //permet de supprimer les espaces à la fin
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail], //remplace la REGEX
            lowercase: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024, //comme le MDP est crypté il peut être très long 
            minLength: 6
        },
        bio: {
            type: String,
            max: 1024,
        },
        followers: {
            type: [String] //contiendra toute une série d'ID des gens qui le suivent 
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String] //si l'idée de ce post est dans le tableau utilisateur alors on met le coeur rouge 
        }
    },
    {
        timestamps: true,
    }
)

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel; 