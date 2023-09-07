import mongoose, { Schema } from "mongoose";


const User = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


export default mongoose.models.User || mongoose.model('User', User)