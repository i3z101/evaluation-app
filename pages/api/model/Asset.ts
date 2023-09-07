import mongoose from "mongoose";

const Asset = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    mainCategory: {
        type: String,
        required: true
    },
})



export default mongoose.models.Asset || mongoose.model("Asset", Asset)