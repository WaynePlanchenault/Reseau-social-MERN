const mongoose = require ('mongoose');
const PostSchema = new mongoose.Schema(
    {
        posterId: {
            type: String,
            require: true
        },
        message: {
            type: String,
            trim: true,
            maxLength: 500,
        },
        picture: {
            type: String,
        },
        video: {
            type: String,
        },
        likers: {
            type: [String], //id des utilisateurs qui auront liké le post
            required: true,
        },
        comments: {
            type: [
                {
                    commenterId: String,
                    commenterPseudo: String,
                    text: String,
                    timestamp: Number,
                }
            ],
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('post', PostSchema)