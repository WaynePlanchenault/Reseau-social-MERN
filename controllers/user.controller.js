const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;


// tous les utilisateurs
module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password'); //tu trouves et tu prend tout ce que contient la table
    res.status(200).json(users);
}


// un seul utilisateur
module.exports.userInfo = (req, res) => {
    // console.log(req.params); les params dans l'url
    if(!ObjectID.isValid(req.params.id)) // test si l'id est connu dans la bdd
        return res.status(400).send('ID unknown : ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if(!err) res.send(docs)
        else console.log('ID unknown : ' + err);
    }).select('-password');
};

module.exports.updateUser = async (req,res) => {
    if(!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        await UserModel.findOneAndUpdate(
            {_id: req.params.id},
            {
                $set: {
                    bio: req.body.bio
                }
            },
            { new: true, upsert: true, setDefaultsOnInsert: true},
            (err, docs) => {
                if(!err) return res.send(docs);
                if(err) return res.status(500).senc({ message: err});
            }
        )
    } catch (err) {
        if(err) return res.json(500).senc({ message: err});
    }
}