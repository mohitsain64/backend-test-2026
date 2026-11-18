import mongoose from "mongoose";

// Define user structure
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number
    },

    password: {
        type: String,
        required: true
    }

}, { timestamps: true });

// Create User model
const User = mongoose.model("User", userSchema);

export default User;