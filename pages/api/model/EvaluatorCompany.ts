import mongoose from "mongoose";
import User from "./User";


const CompanySchema = new mongoose.Schema({
    serialNumber: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    representiveName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    },
    // FILEPATH
    logoPath: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        min: 8,
        max: 8,
        unique: true
    },
    saudiSerialNumber: {
        type: String,
        required: true
    },
    ricsSerialNumber: {
        type: String,
        required: true
    },
    insuredEvaluator: {
        type: String,
        required: true
    },
    // RICHTEXT
    companyExperience: {
        type: String,
        required: true
    },
    evaluatorExperience: {
        type: String,
        required: true
    },
    // FILEPATH
    insuranceCertificate: {
        type: String,
        required: true
    },
    // RICHTEXT
    policy: {
        type: String,
        required: true
    },
    // RICHTEXT
    contentShareRestrictions: {
        type: String,
        required: true
    },
    evaluationTeam: [{
        type: mongoose.Types.ObjectId,
        ref: "EvaluationTeam"
    }],
    // FILE PATH
    SaudiEvaluatorsAuthorityLicense: {
        type: String,
        required: true
    },
    // FILE PATH
    evaluatorsCertifiedCertificate: {
        type: String,
        required: true
    },
    // FILEPATH
    bankInformation: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
}, {
    timestamps: true
})


export default mongoose.models.Company || mongoose.model("Company", CompanySchema)