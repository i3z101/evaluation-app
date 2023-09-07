// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs/promises'
import nonAsyncFs from 'fs'
import {TemplateHandler, MimeType} from 'easy-template-x'
import {convertWordFiles} from 'convert-multiple-files-ul'
import connectToDb from '../database-connection'
import User from '../model/User'
import Company from '../model/EvaluatorCompany'


export const config = {
  api: {
      bodyParser: {
          sizeLimit: '10mb' // Set desired value here
      }
  }
}


const uploadBase64Image = async (base64: string, filename: string) => {
  let base64Data = ""
  let extension = ""
  if (base64.includes("data:image/png")) {
    base64Data = base64.replace(/^data:image\/png;base64,/, "")
    extension = "png"
  }else if(base64.includes("data:image/jpeg")) {
    base64Data = base64.replace(/^data:image\/jpeg;base64,/, "")
    extension = "jpeg"
  }else if(base64.includes("data:image/jpg")) {
    base64Data = base64.replace(/^data:image\/jpg;base64,/, "")
    extension = "jpg"
  }
  await fs.writeFile(process.cwd() + `/public/${filename}.${extension}`, base64Data, {
    encoding: 'base64'
  })
}


const GenerateTermsAndConditionFile = async (req: NextApiRequest, res: NextApiResponse) => {

  await connectToDb()
  
  await uploadBase64Image(JSON.parse(req.body.sectionTwo.ownerLegalDocument), "ownerLegalDocument")
  await uploadBase64Image(JSON.parse(req.body.sectionTwo.fixedPropertiesCertificate), "fixedPropertiesCertificate")
  await uploadBase64Image(JSON.parse(req.body.sectionTwo.realEstateFloorsPlan), "realEstateFloorsPlan")
  

  const company = await Company.findOne({name: "FAKI"}).populate("user", "email")



  const file = await fs.readFile(process.cwd()+"/public/pdfs/terms-of-engagement-arabic.docx")

  const fileHandler = new TemplateHandler()

  const sectionOne = {
    companyLogo: {
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/${company.logoPath}`),
      format: MimeType.Png,
      width: 100,
      height: 100
    },
    insuredEvaluator: company.insuredEvaluator,
    termsAndConditionDate: new Date().toLocaleDateString("en-us", {
      day: "numeric",
      month: "numeric",
      year: "numeric"
    }),
    representiveName: company.representiveName,
    position: company.position,
    address: company.address,
    email: company.user.email,
    phone: company.phone,
    website: company.website,
    saudiSerialNumber: company.saudiSerialNumber,
    ricsSerialNumber: company.ricsSerialNumber,
    serialNumber: req.body.sectionOne.serialNumber,
    clientReferenceNumber: req.body.sectionOne.clientReferenceNumber,
    reportReferenceNumber: req.body.sectionOne.reportReferenceNumber,
    termsOfEngagementReferenceNumber: req.body.sectionOne.termsOfEngagementReferenceNumber,
    projectReferenceNumber: "123456789",
    projectManager: req.body.sectionOne.projectManager,
    companyRegisteredIn: req.body.sectionOne.companyRegisteredIn,
    clientAddress: req.body.sectionOne.clientAddress,
    clientPosition: req.body.sectionOne.clientPosition,
    clientOwner: req.body.sectionOne.clientOwner,
    clientPhone: req.body.sectionOne.clientPhone,
    clientEmail: req.body.sectionOne.clientEmail,
    aimOfEvaluation: req.body.sectionOne.aimOfEvaluation,
    baseValue: req.body.sectionOne.baseValue,
    assets: req.body.sectionOne.assets
  }

  const sectionTwo = {
    evaluationLeader: req.body.sectionTwo.evaluationLeader,
    evaluationTeam: req.body.sectionTwo.evaluationTeam,
    insuranceCertificate: {
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/${company.logoPath}`),
      format: MimeType.Png,
      width: 300,
      height: 300
    },
    companyExperience: company.companyExperience,
    contentShareRestrictions: company.contentShareRestrictions,
    evaluatorExperience: company.evaluatorExperience,
    policy: company.policy,
    observationType: req.body.sectionTwo.observationType,
    observationDate: req.body.sectionTwo.observationDate,
    isIncludeAllEquipment: req.body.sectionTwo.isIncludeAllEquipment,
    isIncludeElements: req.body.sectionTwo.isIncludeElements,
    isIncludeNaturalDangerous: req.body.sectionTwo.isIncludeNaturalDangerous,
    isIncludeDangreousMaterial: req.body.sectionTwo.isIncludeDangreousMaterial,
    isIncludeSpecialDiagnose: req.body.sectionTwo.isIncludeSpecialDiagnose,
    ownerLegalDocument: {
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/ownerLegalDocument.png`),
      format: MimeType.Png,
      width: 300,
      height: 300
    },
    fixedPropertiesCertificate: {
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/fixedPropertiesCertificate.png`),
      format: MimeType.Png,
      width: 300,
      height: 300
    },
    realEstateFloorsPlan: {
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/realEstateFloorsPlan.png`),
      format: MimeType.Png,
      width: 300,
      height: 300
    },
    intrnationalCriteria: req.body.sectionTwo.intrnationalCriteria,
    royalCriteria: req.body.sectionTwo.royalCriteria,
    evaluationOccupationRules: req.body.sectionTwo.evaluationOccupationRules,
    evaluationMethods: req.body.sectionTwo.evaluationMethods,
    assumptions: req.body.sectionTwo.assumptions,
    doYouWorkWithOtherClient: req.body.sectionTwo.doYouWorkWithOtherClient,
    otherClientWork: req.body.sectionTwo.otherClientWork,
    otherClientWorkStrategy: req.body.sectionTwo.otherClientWorkStrategy,
    doPartenersWorkPersonallyWithOtherClient: req.body.sectionTwo.doPartenersWorkPersonallyWithOtherClient,
    doPartnersOrEmployeesKnowSomeoneFromClient: req.body.sectionTwo.doPartnersOrEmployeesKnowSomeoneFromClient,
    doEmployeeHaveInterest: req.body.sectionTwo.doEmployeeHaveInterest,
    doCompanyWorkOnBehalfOfBuyer: req.body.sectionTwo.doCompanyWorkOnBehalfOfBuyer,
    doCompanyEvaluatesRealEstate: req.body.sectionTwo.doCompanyEvaluatesRealEstate,
    doCompanyDoConsumptionEvaluation: req.body.sectionTwo.doCompanyDoConsumptionEvaluation,
    doPartnersOrEmployeesKnowPreviousWork: req.body.sectionTwo.doPartnersOrEmployeesKnowPreviousWork,
    doCompanyWorkOnProjectsWithConflictWithClient: req.body.sectionTwo.doCompanyWorkOnProjectsWithConflictWithClient,
    doCompanyWorkOnProjectsWithConflictWithRealEstate: req.body.sectionTwo.doCompanyWorkOnProjectsWithConflictWithRealEstate,
    doCompanyHaveParticipatedManagersOrPartnersOrEmployees: req.body.sectionTwo.doCompanyHaveParticipatedManagersOrPartnersOrEmployees,
    doThereParticipationInCosts: req.body.sectionTwo.doThereParticipationInCosts,
    doEvaluationCostMoreThanTwentyFive: req.body.sectionTwo.doEvaluationCostMoreThanTwentyFive,
    doCompanyGaveInitialPromotion: req.body.sectionTwo.doCompanyGaveInitialPromotion,
    doCompanyEvaluatesBorrower: req.body.sectionTwo.doCompanyEvaluatesBorrower,
    doCompanyHaveLongTermRelationShip: req.body.sectionTwo.doCompanyHaveLongTermRelationShip,
    doCompanyKeyInDocument: req.body.sectionTwo.doCompanyKeyInDocument,
    doCompanyHaveBenefits: req.body.sectionTwo.doCompanyHaveBenefits,
    doCompanyWorkOnBehalfOfOwner: req.body.sectionTwo.doCompanyWorkOnBehalfOfOwner,
    doCompanyBehaveOnBehalfOfOwner: req.body.sectionTwo.doCompanyBehaveOnBehalfOfOwner,
    doRealEstatePreserveCompany: req.body.sectionTwo.doRealEstatePreserveCompany,
    doCompanyBehaveOnDeal: req.body.sectionTwo.doCompanyBehaveOnDeal,
    doCompanyGaveConsultation: req.body.sectionTwo.doCompanyGaveConsultation,
    doCompanyGaveConsultationFoRealEstate: req.body.sectionTwo.doCompanyGaveConsultationFoRealEstate,
    evaluationConflictSelector: req.body.sectionTwo.evaluationConflictSelector,
    doCompanyReceivedComplaint: req.body.sectionTwo.doCompanyReceivedComplaint,
    evaluatorNotQualified: req.body.sectionTwo.evaluatorNotQualified,
    evaluatorSuggestsHiringAnotherCompany: req.body.sectionTwo.evaluatorSuggestsHiringAnotherCompany,
    doAssetsEvaluatedByEvaluatorOrCompany: req.body.sectionTwo.doAssetsEvaluatedByEvaluatorOrCompany,
    doEvalutaorParticipatedOnPurchasingRealEstate: req.body.sectionTwo.doEvalutaorParticipatedOnPurchasingRealEstate,
    doEvaluatorGaveSequenceOfEvaluations: req.body.sectionTwo.doEvaluatorGaveSequenceOfEvaluations,
    wasEvaluatorTheLeader: req.body.sectionTwo.wasEvaluatorTheLeader,
    doEvaluatorEvaluatesAssetForLastTwelveMonths: req.body.sectionTwo.doEvaluatorEvaluatesAssetForLastTwelveMonths, 
    doEvaluatorParticipatedAssetForLastTwelveMonths: req.body.sectionTwo.doEvaluatorParticipatedAssetForLastTwelveMonths,
    doBorrowerExposed: req.body.sectionTwo.doBorrowerExposed
  }

  const sectionThree = {
    expectedSubmissionDate: req.body.sectionThree.expectedSubmissionDate,
    workingDays: req.body.sectionThree.workingDays,
    evaluationCost: req.body.sectionThree.evaluationCost,
    extraEvaluationCost: req.body.sectionThree.extraEvaluationCost,
    totalWithoutVat: req.body.sectionThree.totalWithoutVat,
    vat: req.body.sectionThree.vat,
    totalWithVat: req.body.sectionThree.totalWithVat,
    firstPayDate: req.body.sectionThree.firstPayDate,
    firstPayPercentage: req.body.sectionThree.firstPayPercentage,
    firstPayTotalWithoutVatAndDiscounts: req.body.sectionThree.firstPayTotalWithoutVatAndDiscounts,
    lastPayDate: req.body.sectionThree.lastPayDate,
    lastPayPercentage: req.body.sectionThree.lastPayPercentage,
    lastPayTotalWithoutVatAndDiscounts: req.body.sectionThree.lastPayTotalWithoutVatAndDiscounts,
    costs: req.body.sectionThree.costs,
    extraCosts: req.body.sectionThree.extraCosts,
    bankInformation:{
      _type: "image",
      source: nonAsyncFs.readFileSync(`${process.cwd()}/public/${company.bankInformation}`),
      format: MimeType.Png,
      width: 120,
      height: 120
    },
    vatNumber: "12345678912345"
  }


  const docxDataObject = {
    ...sectionOne,
    ...sectionTwo,
    ...sectionThree
  }

  const docxFile = await fileHandler.process(file, docxDataObject)

  await fs.writeFile(process.cwd()+`/public/pdfs/${sectionOne.termsOfEngagementReferenceNumber}.docx`, docxFile)

    
  await convertWordFiles(process.cwd()+`/public/pdfs/${sectionOne.termsOfEngagementReferenceNumber}.docx`, "pdf", process.cwd()+"/public/terms-of-engagements", "100")

  await fs.unlink(process.cwd()+`/public/pdfs/${sectionOne.termsOfEngagementReferenceNumber}.docx`)

  // await fs.cp(process.cwd()+`/public/pdfs/file/${sectionOne.termsOfEngagementReferenceNumber}.pdf`, process.cwd()+`/public/pdfs`)


  // await fs.unlink(process.cwd()+`/public/pdfs/file/`)



  return res.json({
    fileURL: `/terms-of-engagements/${sectionOne.termsOfEngagementReferenceNumber}.pdf`
  })
}


export default GenerateTermsAndConditionFile
