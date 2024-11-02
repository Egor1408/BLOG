import mongoose from "mongoose";

const Article = new mongoose.Schema({
    author: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    imageUrl: {type: String},
    createdAt: {type: String, required: true},
});

export default mongoose.model('Article', Article);