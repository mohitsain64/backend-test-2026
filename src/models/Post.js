import mongoose from "mongoose";

// Define post structure
const postSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    }

}, { timestamps: true });

// Create Post model
const Post = mongoose.model("Post", postSchema);

export default Post;