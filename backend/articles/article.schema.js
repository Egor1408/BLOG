import mongoose from "mongoose";

const Article = new mongoose.Schema({
    author: {
        type: String,
        default: "Author",
        required: true
    },
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    imageUrl: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
},
{
    versionKey: false,
});

export default mongoose.model('Article', Article);