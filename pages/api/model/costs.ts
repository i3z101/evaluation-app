import mongoose from "mongoose";

const CostsDetails = new mongoose.Schema({
    asset: {
        type: String,
        required: true
    },
    attitudeAndimplementationMthod: {
        type: String,
        required: true
    },
    capacity: {
        type: String,
        required: true
    },
    numberOfPays: {
        type: String,
        required: true
    },
    totalCostsWithoutVatAndDiscounts: {
        type: String,
        required: true
    },
})
const ExtraCostsDetails = new mongoose.Schema({
    asset: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    piecePrice: {
        type: String,
        required: true
    },
    totalCostsWithoutVatAndDiscounts: {
        type: String,
        required: true
    },
})


export default {
    "CostsDetails": mongoose.models.CostsDetails || mongoose.model("CostsDetails", CostsDetails),
    "ExtraCostsDetails": mongoose.models.ExtraCostsDetails || mongoose.model("ExtraCostsDetails", ExtraCostsDetails),
}