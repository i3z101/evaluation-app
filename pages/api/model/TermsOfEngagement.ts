import mongoose from "mongoose";


const TermsOfEngagement = new mongoose.Schema({
    projectManager: {
        type: String,
        required: true
    },
    reportReferenceNumber: {
        type: mongoose.Schema.Types.UUID,
        required: true
    },
    aimOfEvaluation: {
        type: String,
        required: true
    },
    baseValue: {
        type: String,
        required: true
    },
    assets: [{
        type: mongoose.Types.ObjectId,
        ref: "Asset"
    }],
    evaluationLeader: {
        type: String,
        required: true
    },
    evaluationTeam: [{
        type: mongoose.Types.ObjectId,
        ref: "EvaluationTeam"
    }],
    // RICHTEXT
    informationResources: {
        type: String,
        required: true
    },
    observationType: {
        type: String,
        required: true
    },
    observationDate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    isIncludeAllEquipment: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    isIncludeElements: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    isIncludeNaturalDangerous: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    isIncludeDangreousMaterial: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    isIncludeSpecialDiagnose: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    // FILE PATH
    ownerLegalDocument: {
        type: String,
        required: true
    },
    // FILE PATH
    fixedPropertiesCertificate: {
        type: String,
        required: true
    },
    // FILE PATH
    realEstateFloorsPlan: {
        type: String,
        required: true
    },
    // RICHTEXT
    assumptions: {
        type: String,
        required: true
    },
    // RICHTEXT
    intrnationalCriteria: {
        type: String,
        required: true
    },
    // RICHTEXT
    royalCriteria: {
        type: String,
        required: true
    },
    // RICHTEXT
    evaluationOccupationRules: {
        type: String,
        required: true
    },
    evaluations: [{
        type: mongoose.Types.ObjectId,
        ref: "Evaluation"
    }],
    currency: {
        type: String,
        required: true
    },
    doYouWorkWithOtherClient: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    otherClientWork: {
        type: String,
        required: false
    },
    otherClientWorkStrategy: {
        type: String,
        required: false
    },
    doPartenersWorkPersonallyWithOtherClient: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doPartnersOrEmployeesKnowSomeoneFromClient: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEmployeeHaveInterest: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyWorkOnBehalfOfBuyer: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyEvaluatesRealEstate: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyDoConsumptionEvaluation: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doPartnersOrEmployeesKnowPreviousWork: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyWorkOnProjectsWithConflictWithClient: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyWorkOnProjectsWithConflictWithRealEstate: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyHaveManagers: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doThereParticipationInCosts: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEvaluationCostMoreThanTwentyFive: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyGaveInitialPromotion: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyEvaluatesBorrower: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyHaveLongTermRelationShip: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyKeyInDocument: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyHaveBenefits: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyWorkOnBehalfOfOwner: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyBehaveOnBehalfOfOwner: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doRealEstatePreserveCompany: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyBehaveOnDeal: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyGaveConsultation: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doCompanyGaveConsultationFoRealEstate: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    // RICHTEXT
    EvaluationConflictSelector: {
        type: String,
        required: true
    },
    doCompanyReceivedComplaint: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    EvaluatorNotQualified: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    EvaluatorSuggestsHiringAnotherCompany: {
        type: String,
        required: false
    },
    doAssetsEvaluatedByEvaluatorOrCompany: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEvalutaorParticipatedOnPurchasingRealEstate: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEvaluatorGaveSequenceOfEvaluations: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    wasEvaluatorTheLeader: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEvaluatorEvaluatesAssetForLastTwelveMonths: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doEvaluatorParticipatedAssetForLastTwelveMonths: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    doBorrowerExposed: {
        type: mongoose.Schema.Types.Boolean,
        required: true
    },
    workingDays: {
        type: String,
        required: true
    },
    expectedSubmissionDate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    evaluationCost: {
        type: String,
        required: true
    },
    extraEvaluationCost: {
        type: String,
        required: true
    },
    totalWithoutVat: {
        type: String,
        required: true
    },
    vat: {
        type: String,
        required: true
    },
    totalWithVat: {
        type: String,
        required: true
    },
    costsDetails: [{
        type: mongoose.Types.ObjectId,
        ref: "costsDetails"
    }],
    extraCostsDetails: [{
        type: mongoose.Types.ObjectId,
        ref: "extraCostsDetails"
    }],
    firstPayDate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    firstPayPercentage: {
        type: String,
        required: true
    },
    firstPayTotalWithoutVatAndDiscounts: {
        type: String,
        required: true
    },
    lastPayDate: {
        type: mongoose.Schema.Types.Date,
        required: true
    },
    lastPayPercentage: {
        type: String,
        required: true
    },
    lastPayTotalWithoutVatAndDiscounts: {
        type: String,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientReferenceNumber: {
        type: String,
        required: false
    },
})


export default mongoose.models.TermsOfEngagement || mongoose.model("TermsOfEngagement", TermsOfEngagement)