import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, // Corregido "require" por "required"
    },
    lastName: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    roleCompany: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cel: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    regDate: {
        type: String,
        required: true,
    },
});

export const userModel = mongoose.model('User', userSchema);
