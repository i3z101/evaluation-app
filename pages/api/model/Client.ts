import mongoose from "mongoose";

const Client = new mongoose.Schema({
    companyRegisteredIn: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})


export default mongoose.models.Client || mongoose.model("Client", Client)