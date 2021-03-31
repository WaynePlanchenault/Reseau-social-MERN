//déclare à quoi va ressembler la bdd de l'utilisateur
const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');


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
        picture: {
            type: String,
            default: "./uploads/profil/random-user.png"
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
);

// play function before save into display: 'block'
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt(); 
    //bcrypt va nous générer uen série de caractères 
    this.password = await bcrypt.hash(this.password, salt);
    next(); // une fois que t'as fait ça passe à la suite
})

const UserModel = mongoose.model('user', userSchema)
module.exports = UserModel; 