import mongoose from "mongoose";

const EvaluationTeam = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
})


export default mongoose.models.EvaluationTeam || mongoose.model("EvaluationTeam", EvaluationTeam)