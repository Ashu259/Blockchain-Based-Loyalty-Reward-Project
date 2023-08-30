import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true,
        min: 5,
        max: 20,
    },

    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20,
    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },

    password: {
        type: String,
        required: true,
    },

    city: {
        type: String,
    },
})

const user = mongoose.model("user", userSchema);

export default user;