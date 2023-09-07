import mongoose from "mongoose";

const Evaluation = new mongoose.Schema({
    attitude: {
        type: String,
        required: true
    },
    implementationMethod: {
        type: String,
        required: true
    },
})


export default mongoose.models.Evaluation || mongoose.model("Evaluation", Evaluation)