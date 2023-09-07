import {Dispatch, FC, useState, useEffect} from 'react'
import { Divider, SectionTitle } from '../reusable/section-title-divider'
import {Form, Table, Button, Modal} from 'react-bootstrap'
import ReusableForm from '../reusable/form'
import SubHeading from '../reusable/subHeading'
import YesNoQuestion from '../reusable/yes-no-question'
import axios from 'axios'

const CreateTermsOfEngagement: FC = ()=> {
    const [assets, setAssets] = useState<[{
        description: {
            value: string,
            name: string
        },
        quantity: {
            value: string,
            name: string
        },
        capacity: {
            value: string,
            name: string
        },
        mainCategory: {
            value: string,
            name: string
        },
        address: {
            value: string,
            name: string
        },
    }]>([{
        description: {
            value: '',
            name: 'description'
        },
        quantity: {
            value: '',
            name: 'quantity'
        },
        capacity: {
            value: '',
            name: 'capacity'
        },
        mainCategory: {
            value: '',
            name: 'mainCategory'
        },
        address: {
            value: '',
            name: 'address'
        }
    }])
    const [evaluationTeam, setEvaluationTeam] = useState<[{
        name: {
            name: string,
            value: string,
        }
    }]>([{name: {name: 'name', value: ''} }])

    const [evaluationMethods, setEvaluationMethods] = useState<[{
        attitude: {
            name: string,
            value: string
        },
        implementationMethod: {
            name: string,
            value: string
        }
    }]>([{attitude: {name: "attitude", value: '' }, implementationMethod: {name: 'implementationMethod', value: ''}}])
    
    const [costs, setCosts] = useState<[{
        asset: {
            name: string,
            value: string
        },
        attitudeAndimplementationMethod: {
            name: string,
            value: string
        },
        capacity: {
            name: string,
            value: string
        },
        numberOfPays: {
            name: string,
            value: string
        },
        totalCostsWithoutVatAndDiscounts: {
            name: string,
            value: string
        },
    }]>([{
        asset: {name: 'asset', value: ''}, 
        attitudeAndimplementationMethod: {name: 'attitudeAndimplementationMethod', value: ''}, 
        capacity: {name: 'capacity', value: ''},
        numberOfPays: {name: 'numberOfPays', value: ''},
        totalCostsWithoutVatAndDiscounts: {name: 'totalCostsWithoutVatAndDiscounts', value: ''}
    }])
    
    const [extraCosts, setExtraCosts] = useState<[{
        asset: {
            name: string,
            value: string
        },
        quantity: {
            name: string,
            value: string
        },
        piecePrice: {
            name: string,
            value: string
        },
        totalCostsWithoutVatAndDiscounts: {
            name: string,
            value: string
        },
    }]>([{
        asset: {name: 'asset', value: ''}, 
        quantity: {name: 'quantity', value: ''}, 
        piecePrice: {name: 'piecePrice', value: ''},
        totalCostsWithoutVatAndDiscounts: {name: 'totalCostsWithoutVatAndDiscounts', value: ''}
    }])

    const [sectionOne, setSectionOne] = useState<{
        clientReferenceNumber: string,
        reportReferenceNumber: string,
        serialNumber: string,
        termsOfEngagementReferenceNumber: string,
        projectManager: string,
        companyRegisteredIn: string,
        clientAddress: string,
        clientOwner: string,
        clientPosition: string,
        clientPhone: string,
        clientEmail: string
    }>({
        clientReferenceNumber: '',
        reportReferenceNumber: '',
        serialNumber: '',
        termsOfEngagementReferenceNumber: '',
        projectManager: '',
        companyRegisteredIn: '',
        clientAddress: '',
        clientPosition: '',
        clientOwner: '',
        clientPhone: '',
        clientEmail: ''
    })

    const [sectionTwo, setSectionTwo] = useState<{
        aimOfEvaluation: string,
        baseValue: string,
        evaluationLeader: string,
        informationResources: string,
        observationType: string,
        observationDate: string

    }>({
        aimOfEvaluation: '',
        baseValue: '',
        evaluationLeader: '',
        informationResources: '',
        observationType: '',
        observationDate: ''
    })

    const [sectionThree, setSectionThree] = useState<{
        isIncludeAllEquipment: {
            name: string,
            value: ''
        },
        isIncludeElements: {
            name: string,
            value: ''
        },
        isIncludeNaturalDangerous: {
            name: string,
            value: ''
        },
        isIncludeDangreousMaterial: {
            name: string,
            value: ''
        },
        isIncludeSpecialDiagnose: {
            name: string,
            value: ''
        },
        ownerLegalDocument: {
            name: string,
            value: any
        },
        fixedPropertiesCertificate: {
            name: string,
            value: any
        },
        realEstateFloorsPlan: {
            name: string,
            value: any
        },
        assumptions: {
            name: string,
            value: string
        },
        intrnationalCriteria: {
            name: string,
            value: string
        },
        royalCriteria: {
            name: string,
            value: string
        },
        evaluationOccupationRules: {
            name: string,
            value: string
        },
        doYouWorkWithOtherClient: {
            name: string,
            value: string
        },
        otherClientWork: {
            name: string,
            value: string
        },
        otherClientWorkStrategy: {
            name: string,
            value: string
        },
        doPartenersWorkPersonallyWithOtherClient: {
            name: string,
            value: string
        },
        doPartnersOrEmployeesKnowSomeoneFromClient: {
            name: string,
            value: string
        },
        doEmployeeHaveInterest: {
            name: string,
            value: string
        },
        doCompanyWorkOnBehalfOfBuyer: {
            name: string,
            value: string
        },
        doCompanyEvaluatesRealEstate: {
            name: string,
            value: string
        },
        doCompanyDoConsumptionEvaluation: {
            name: string,
            value: string
        },
        doPartnersOrEmployeesKnowPreviousWork: {
            name: string,
            value: string
        },
        doCompanyWorkOnProjectsWithConflictWithClient: {
            name: string,
            value: string
        },
        doCompanyWorkOnProjectsWithConflictWithRealEstate: {
            name: string,
            value: string
        },
        doCompanyHaveParticipatedManagersOrPartnersOrEmployees: {
            name: string,
            value: string
        },
        doThereParticipationInCosts: {
            name: string,
            value: string
        },
        doEvaluationCostMoreThanTwentyFive: {
            name: string,
            value: string
        },
        doCompanyGaveInitialPromotion: {
            name: string,
            value: string
        },
        doCompanyEvaluatesBorrower: {
            name: string,
            value: string
        },
        doCompanyHaveLongTermRelationShip: {
            name: string,
            value: string
        },
        doCompanyKeyInDocument: {
            name: string,
            value: string
        },
        doCompanyHaveBenefits: {
            name: string,
            value: string
        },
        doCompanyWorkOnBehalfOfOwner: {
            name: string,
            value: string
        },
        doCompanyBehaveOnBehalfOfOwner: {
            name: string,
            value: string
        },
        doRealEstatePreserveCompany: {
            name: string,
            value: string
        },
        doCompanyBehaveOnDeal: {
            name: string,
            value: string
        },
        doCompanyGaveConsultation: {
            name: string,
            value: string
        },
        doCompanyGaveConsultationFoRealEstate: {
            name: string,
            value: string
        },
        evaluationConflictSelector: {
            name: string,
            value: string
        },
        doCompanyReceivedComplaint: {
            name: string,
            value: string
        },
        evaluatorNotQualified: {
            name: string,
            value: string
        },
        evaluatorSuggestsHiringAnotherCompany: {
            name: string,
            value: string
        },
        doAssetsEvaluatedByEvaluatorOrCompany: {
            name: string,
            value: string
        },
        doEvalutaorParticipatedOnPurchasingRealEstate: {
            name: string,
            value: string
        },
        doEvaluatorGaveSequenceOfEvaluations: {
            name: string,
            value: string
        },
        wasEvaluatorTheLeader: {
            name: string,
            value: string
        },
        doEvaluatorEvaluatesAssetForLastTwelveMonths: {
            name: string,
            value: string
        },
        doEvaluatorParticipatedAssetForLastTwelveMonths: {
            name: string,
            value: string
        },
        doBorrowerExposed: {
            name: string,
            value: string
        },
    }>({
        isIncludeAllEquipment: {
            name: 'isIncludeAllEquipment',
            value: ''
        },
        isIncludeElements: {
            name: 'isIncludeElements',
            value: ''
        },
        isIncludeNaturalDangerous: {
            name: 'isIncludeNaturalDangerous',
            value: ''
        },
        isIncludeDangreousMaterial: {
            name: 'isIncludeDangreousMaterial',
            value: ''
        },
        isIncludeSpecialDiagnose: {
            name: 'isIncludeSpecialDiagnose',
            value: ''
        },
        ownerLegalDocument: {
            name: 'ownerLegalDocument',
            value: null
        },
        fixedPropertiesCertificate: {
            name: 'fixedPropertiesCertificate',
            value: null
        },
        realEstateFloorsPlan: {
            name: 'fixedPropertiesCertificate',
            value: null
        },
        assumptions: {
            name: 'assumptions',
            value: ''
        },
        intrnationalCriteria: {
            name: 'intrnationalCriteria',
            value: ''
        },
        royalCriteria: {
            name: 'royalCriteria',
            value: ''
        },
        evaluationOccupationRules: {
            name: 'evaluationOccupationRules',
            value: ''
        },
        doYouWorkWithOtherClient: {
            name: 'doYouWorkWithOtherClient',
            value: ''
        },
        otherClientWork: {
            name: 'otherClientWork',
            value: ''
        },
        otherClientWorkStrategy: {
            name: 'otherClientWorkStrategy',
            value: ''
        },
        doPartenersWorkPersonallyWithOtherClient: {
            name: 'doPartenersWorkPersonallyWithOtherClient',
            value: ''
        },
        doPartnersOrEmployeesKnowSomeoneFromClient: {
            name: 'doPartnersOrEmployeesKnowSomeoneFromClient',
            value: ''
        },
        doEmployeeHaveInterest: {
            name: 'doEmployeeHaveInterest',
            value: ''
        },
        doCompanyWorkOnBehalfOfBuyer: {
            name: 'doCompanyWorkOnBehalfOfBuyer',
            value: ''
        },
        doCompanyEvaluatesRealEstate: {
            name: 'doCompanyEvaluatesRealEstate',
            value: ''
        },
        doCompanyDoConsumptionEvaluation: {
            name: 'doCompanyDoConsumptionEvaluation',
            value: ''
        },
        doPartnersOrEmployeesKnowPreviousWork: {
            name: 'doPartnersOrEmployeesKnowPreviousWork',
            value: ''
        },
        doCompanyWorkOnProjectsWithConflictWithClient: {
            name: 'doCompanyWorkOnProjectsWithConflictWithClient',
            value: ''
        },
        doCompanyWorkOnProjectsWithConflictWithRealEstate: {
            name: 'doCompanyWorkOnProjectsWithConflictWithRealEstate',
            value: ''
        },
        doCompanyHaveParticipatedManagersOrPartnersOrEmployees: {
            name: 'doCompanyHaveParticipatedManagersOrPartnersOrEmployees',
            value: ''
        },
        doThereParticipationInCosts: {
            name: 'doThereParticipationInCosts',
            value: ''
        },
        doEvaluationCostMoreThanTwentyFive: {
            name: 'doEvaluationCostMoreThanTwentyFive',
            value: ''
        },
        doCompanyGaveInitialPromotion: {
            name: 'doCompanyGaveInitialPromotion',
            value: ''
        },
        doCompanyEvaluatesBorrower: {
            name: 'doCompanyEvaluatesBorrower',
            value: ''
        },
        doCompanyHaveLongTermRelationShip: {
            name: 'doCompanyHaveLongTermRelationShip',
            value: ''
        },
        doCompanyKeyInDocument: {
            name: 'doCompanyKeyInDocument',
            value: ''
        },
        doCompanyHaveBenefits: {
            name: 'doCompanyHaveBenefits',
            value: ''
        },
        doCompanyWorkOnBehalfOfOwner: {
            name: 'doCompanyWorkOnBehalfOfOwner',
            value: ''
        },
        doCompanyBehaveOnBehalfOfOwner: {
            name: 'doCompanyBehaveOnBehalfOfOwner',
            value: ''
        },
        doRealEstatePreserveCompany: {
            name: 'doRealEstatePreserveCompany',
            value: ''
        },
        doCompanyBehaveOnDeal: {
            name: 'doCompanyBehaveOnDeal',
            value: ''
        },
        doCompanyGaveConsultation: {
            name: 'doCompanyGaveConsultation',
            value: ''
        },
        doCompanyGaveConsultationFoRealEstate: {
            name: 'doCompanyGaveConsultationFoRealEstate',
            value: ''
        },
        evaluationConflictSelector: {
            name: 'evaluationConflictSelector',
            value: ''
        },
        doCompanyReceivedComplaint: {
            name: 'doCompanyReceivedComplaint',
            value: ''
        },
        evaluatorNotQualified: {
            name: 'evaluatorNotQualified',
            value: ''
        },
        evaluatorSuggestsHiringAnotherCompany: {
            name: 'evaluatorSuggestsHiringAnotherCompany',
            value: ''
        },
        doAssetsEvaluatedByEvaluatorOrCompany: {
            name: 'doAssetsEvaluatedByEvaluatorOrCompany',
            value: ''
        },
        doEvalutaorParticipatedOnPurchasingRealEstate: {
            name: 'doEvalutaorParticipatedOnPurchasingRealEstate',
            value: ''
        },
        doEvaluatorGaveSequenceOfEvaluations: {
            name: 'doEvaluatorGaveSequenceOfEvaluations',
            value: ''
        },
        wasEvaluatorTheLeader: {
            name: 'wasEvaluatorTheLeader',
            value: ''
        },
        doEvaluatorEvaluatesAssetForLastTwelveMonths: {
            name: 'doEvaluatorEvaluatesAssetForLastTwelveMonths',
            value: ''
        },
        doEvaluatorParticipatedAssetForLastTwelveMonths: {
            name: 'doEvaluatorParticipatedAssetForLastTwelveMonths',
            value: ''
        },
        doBorrowerExposed: {
            name: 'doBorrowerExposed',
            value: ''
        },
    })

    const [sectionFour, setSectionFour] = useState<{
        expectedSubmissionDate: {
            name: string,
            value:string
        },
        workingDays: {
            name: string,
            value:string
        },
        evaluationCost: {
            name: string,
            value:string
        },
        extraEvaluationCost: {
            name: string,
            value:string
        },
        totalWithoutVat: {
            name: string,
            value:string
        },
        vat: {
            name: string,
            value:string
        },
        totalWithVat: {
            name: string,
            value:string
        },
        firstPayDate: {
            name: string,
            value:string
        },
        firstPayPercentage: {
            name: string,
            value:string
        },
        firstPayTotalWithoutVatAndDiscounts: {
            name: string,
            value:string
        },
        lastPayDate: {
            name: string,
            value:string
        },
        lastPayPercentage: {
            name: string,
            value:string
        },
        lastPayTotalWithoutVatAndDiscounts: {
            name: string,
            value:string
        },
    }>({
        expectedSubmissionDate: {
            name: "expectedSubmissionDate",
            value: ''
        },
        workingDays: {
            name: "workingDays",
            value: ''
        },
        evaluationCost: {
            name: "evaluationCost",
            value: ''
        },
        extraEvaluationCost: {
            name: "extraEvaluationCost",
            value: ''
        },
        totalWithoutVat: {
            name: "totalWithoutVat",
            value: ''
        },
        vat: {
            name: "vat",
            value: ''
        },
        totalWithVat: {
            name: "totalWithVat",
            value: ''
        },
        firstPayDate: {
            name: "firstPayDate",
            value: ''
        },
        firstPayPercentage: {
            name: "firstPayPercentage",
            value: ''
        },
        firstPayTotalWithoutVatAndDiscounts: {
            name: "firstPayTotalWithoutVatAndDiscounts",
            value: ''
        },
        lastPayDate: {
            name: "lastPayDate",
            value: ''
        },
        lastPayPercentage: {
            name: "lastPayPercentage",
            value: ''
        },
        lastPayTotalWithoutVatAndDiscounts: {
            name: "lastPayTotalWithoutVatAndDiscounts",
            value: ''
        },
    })

    const [waitState, setWaitState] = useState<{
        isSendingRequest: boolean,
        fileURL: string
    }>({
        isSendingRequest: false,
        fileURL: ''
    })

    // useEffect(()=> {
    //     setWaitState(prevState=> ({
    //         ...prevState,
    //         isSendingRequest: false
    //     }))
    // }, [])

    const addNewAsset = ()=> {
        let copiedAssetsState: any = [...assets]
        copiedAssetsState.push({
            description: {
                value: '',
                name: 'description'
            },
            quantity: {
                value: '',
                name: 'quantity'
            },
            capacity: {
                value: '',
                name: 'capacity'
            },
            mainCategory: {
                value: '',
                name: 'mainCategory'
            },
            address: {
                value: '',
                name: 'address'
            },
        })
        setAssets(copiedAssetsState)
    }
    const deleteAsset = (index: number)=> {
        let copiedAssetsState: any = [...assets]
        copiedAssetsState = copiedAssetsState.filter((_: any, idx: number)=> idx !== index)
        setAssets(copiedAssetsState)
    }

    const addNewEvaluationMember = ()=> {
        let copiedEvaluationTeam: any = [...evaluationTeam]
        copiedEvaluationTeam.push({name: {name: 'name', value: ''}})
        setEvaluationTeam(copiedEvaluationTeam)
    }
    const deleteEvaluationTeam = (index: number)=> {
        let copiedEvaluationTeam: any = [...evaluationTeam]
        copiedEvaluationTeam = copiedEvaluationTeam.filter((_: any, idx: number)=> idx != index)
        setEvaluationTeam(copiedEvaluationTeam)
    }

    const addNewEvaluationMethod = ()=> {
        let copiedEvaluationMethods: any = [...evaluationMethods]
        copiedEvaluationMethods.push({attitude: {name: 'attitude', value: ''}, implementationMethod: {name: 'implementationMethod', value: ''}})
        setEvaluationMethods(copiedEvaluationMethods)
    }
    const deleteEvaluationMethod = (index: number)=> {
        let copiedEvaluationMethods: any = [...evaluationMethods]
        copiedEvaluationMethods = copiedEvaluationMethods.filter((_: any, idx: number)=> idx != index)
        setEvaluationMethods(copiedEvaluationMethods)
    }

    const addNewCost = ()=> {
        let copiedCosts: any = [...costs]
        copiedCosts.push({
            asset: {name: 'asset', value: ''}, 
            attitudeAndimplementationMethod: {name:'attitudeAndimplementationMethod', value: ''}, 
            capacity: {name:'capacity', value: ''},
            numberOfPays: {name:'numberOfPays', value: ''},
            totalCostsWithoutVatAndDiscounts: {name:'totalCostsWithoutVatAndDiscounts', value: ''}
        })
        setCosts(copiedCosts)
    }
    const deleteCost = (index: number)=> {
        let copiedCosts: any = [...costs]
        copiedCosts = copiedCosts.filter((_: any, idx: number)=> idx !== index)
        setCosts(copiedCosts)
    }

    const addNewExtraCost = ()=> {
        let copiedExtraCosts: any = [...extraCosts]
        copiedExtraCosts.push({
        asset: {name: 'asset', value: ''}, 
        quantity: {name: 'quantity', value: ''}, 
        piecePrice: {name: 'piecePrice', value: ''},
        totalCostsWithoutVatAndDiscounts: {name: 'totalCostsWithoutVatAndDiscounts', value: ''}
    })
        setExtraCosts(copiedExtraCosts)
    }
    const deleteExtraCost = (index: number)=> {
        let copiedExtraCosts: any = [...extraCosts]
        copiedExtraCosts = copiedExtraCosts.filter((_: any, idx: number)=> idx !== index)
        setExtraCosts(copiedExtraCosts)
    }

    const changeSectionsHandler = (e: any, setSection: Dispatch<any>) => {
        setSection((prevState: any)=> ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const readBase64Async = (file: any): Promise<string>=> {
        return new Promise((resolve, reject) => {
            let url = ''
            const fileURL = new FileReader()
            fileURL.readAsDataURL(file)
            fileURL.onload = (e: any)=> {
                resolve(e.target.result)
            }
        })
    }

    const changeSectionThreeHandler = async (e: any) => {
        let base64 = ''
        if(e.target?.files?.length > 0) {
            base64 = await readBase64Async(e.target.files[0])
        }
        setSectionThree((prevState) => ({
            ...prevState,
            [e.target.name]: {
                ...[prevState][e.target.name],
                value: e.target?.files?.length > 0 ? base64 : e.target.value == "YES" ? "نعم" : e.target.value == "NO" ? "لا" : e.target.value
            }
        }))
    }

    const changeSectionFourHandler = (e: any) => {
        setSectionFour((prevState) => ({
            ...prevState,
            [e.target.name]: {
                ...[prevState][e.target.name],
                value: e.target.value
            }
        }))
    }


    const changeArrayStatesHandler = (e: any, index: number, state: any ,setArrayState: Dispatch<any>) => {
        const copiedState: any = [...state]
        copiedState[index][e.target.name].value = e.target.value
        setArrayState(copiedState)
    }

    const generateTermsAndConditionFile = async() => {
        setWaitState(prevState=>({
            ...prevState,
            isSendingRequest: true
        }))
        const finalSectionOne = {
            ...sectionOne,
            aimOfEvaluation: sectionTwo.aimOfEvaluation,
            baseValue: sectionTwo.baseValue,
            assets: assets.map((asset) => {
                return {
                    description: asset.description.value,
                    quantity: asset.quantity.value,
                    capacity: asset.capacity.value,
                    mainCategory: asset.mainCategory.value,
                    address: asset.address.value
                }
            })
        }
        const finalSectionTwo = {
            evaluationLeader: sectionTwo.evaluationLeader,
            evaluationTeam: evaluationTeam.map((member)=> {
                return {
                    name: member.name.value
                }
            }),
            observationType: sectionTwo.observationType,
            observationDate: sectionTwo.observationDate,
            isIncludeAllEquipment: sectionThree.isIncludeAllEquipment.value,
            isIncludeElements: sectionThree.isIncludeElements.value,
            isIncludeNaturalDangerous: sectionThree.isIncludeNaturalDangerous.value,
            isIncludeDangreousMaterial: sectionThree.isIncludeDangreousMaterial.value,
            isIncludeSpecialDiagnose: sectionThree.isIncludeSpecialDiagnose.value,
            ownerLegalDocument: JSON.stringify(sectionThree.ownerLegalDocument.value),
            fixedPropertiesCertificate: JSON.stringify(sectionThree.fixedPropertiesCertificate.value),
            realEstateFloorsPlan: JSON.stringify(sectionThree.realEstateFloorsPlan.value),
            intrnationalCriteria: sectionThree.intrnationalCriteria.value,
            royalCriteria: sectionThree.royalCriteria.value,
            assumptions:sectionThree.assumptions.value,
            evaluationOccupationRules: sectionThree.evaluationOccupationRules.value,
            evaluationMethods: evaluationMethods.map((evaluationMethod)=> {
                return {
                    attitude: evaluationMethod.attitude.value,
                    implementationMethod: evaluationMethod.implementationMethod.value
                }
            }),
            doYouWorkWithOtherClient: sectionThree.doYouWorkWithOtherClient.value,
            otherClientWork: sectionThree.otherClientWork.value,
            otherClientWorkStrategy: sectionThree.otherClientWorkStrategy.value,
            doPartenersWorkPersonallyWithOtherClient: sectionThree.doPartenersWorkPersonallyWithOtherClient.value,
            doPartnersOrEmployeesKnowSomeoneFromClient: sectionThree.doPartnersOrEmployeesKnowSomeoneFromClient.value,
            doEmployeeHaveInterest: sectionThree.doEmployeeHaveInterest.value,
            doCompanyWorkOnBehalfOfBuyer: sectionThree.doCompanyWorkOnBehalfOfBuyer.value,
            doCompanyEvaluatesRealEstate: sectionThree.doCompanyEvaluatesRealEstate.value,
            doCompanyDoConsumptionEvaluation: sectionThree.doCompanyDoConsumptionEvaluation.value,
            doPartnersOrEmployeesKnowPreviousWork: sectionThree.doPartnersOrEmployeesKnowPreviousWork.value,
            doCompanyWorkOnProjectsWithConflictWithClient: sectionThree.doCompanyWorkOnProjectsWithConflictWithClient.value,
            doCompanyWorkOnProjectsWithConflictWithRealEstate: sectionThree.doCompanyWorkOnProjectsWithConflictWithRealEstate.value,
            doCompanyHaveParticipatedManagersOrPartnersOrEmployees: sectionThree.doCompanyHaveParticipatedManagersOrPartnersOrEmployees.value,
            doThereParticipationInCosts: sectionThree.doThereParticipationInCosts.value,
            doEvaluationCostMoreThanTwentyFive: sectionThree.doEvaluationCostMoreThanTwentyFive.value,
            doCompanyGaveInitialPromotion: sectionThree.doCompanyGaveInitialPromotion.value,
            doCompanyEvaluatesBorrower: sectionThree.doCompanyEvaluatesBorrower.value,
            doCompanyHaveLongTermRelationShip: sectionThree.doCompanyHaveLongTermRelationShip.value,
            doCompanyKeyInDocument: sectionThree.doCompanyKeyInDocument.value,
            doCompanyHaveBenefits: sectionThree.doCompanyHaveBenefits.value,
            doCompanyWorkOnBehalfOfOwner: sectionThree.doCompanyWorkOnBehalfOfOwner.value,
            doCompanyBehaveOnBehalfOfOwner: sectionThree.doCompanyBehaveOnBehalfOfOwner.value,
            doRealEstatePreserveCompany: sectionThree.doRealEstatePreserveCompany.value,
            doCompanyBehaveOnDeal: sectionThree.doCompanyBehaveOnDeal.value,
            doCompanyGaveConsultation: sectionThree.doCompanyGaveConsultation.value,
            doCompanyGaveConsultationFoRealEstate: sectionThree.doCompanyGaveConsultationFoRealEstate.value,
            evaluationConflictSelector: sectionThree.evaluationConflictSelector.value,
            doCompanyReceivedComplaint: sectionThree.doCompanyReceivedComplaint.value,
            evaluatorNotQualified: sectionThree.evaluatorNotQualified.value,
            evaluatorSuggestsHiringAnotherCompany: sectionThree.evaluatorSuggestsHiringAnotherCompany.value,   
            doAssetsEvaluatedByEvaluatorOrCompany: sectionThree.doAssetsEvaluatedByEvaluatorOrCompany.value,
            doEvalutaorParticipatedOnPurchasingRealEstate: sectionThree.doEvalutaorParticipatedOnPurchasingRealEstate.value,
            doEvaluatorGaveSequenceOfEvaluations: sectionThree.doEvaluatorGaveSequenceOfEvaluations.value,
            wasEvaluatorTheLeader: sectionThree.wasEvaluatorTheLeader.value,
            doEvaluatorEvaluatesAssetForLastTwelveMonths: sectionThree.doEvaluatorEvaluatesAssetForLastTwelveMonths.value, 
            doEvaluatorParticipatedAssetForLastTwelveMonths: sectionThree.doEvaluatorParticipatedAssetForLastTwelveMonths.value,
            doBorrowerExposed: sectionThree.doBorrowerExposed.value
        }
        const finalSectionThree = {
            expectedSubmissionDate: sectionFour.expectedSubmissionDate.value,
            workingDays: sectionFour.workingDays.value,
            evaluationCost: sectionFour.evaluationCost.value,
            extraEvaluationCost: sectionFour.extraEvaluationCost.value,
            totalWithoutVat: sectionFour.totalWithoutVat.value,
            vat: sectionFour.vat.value,
            totalWithVat: sectionFour.totalWithVat.value,
            firstPayDate: sectionFour.firstPayDate.value,
            firstPayPercentage: sectionFour.firstPayPercentage.value,
            firstPayTotalWithoutVatAndDiscounts: sectionFour.firstPayTotalWithoutVatAndDiscounts.value,
            lastPayDate: sectionFour.lastPayDate.value,
            lastPayPercentage: sectionFour.lastPayPercentage.value,
            lastPayTotalWithoutVatAndDiscounts: sectionFour.lastPayTotalWithoutVatAndDiscounts.value,
            costs: costs.map((cost)=> {
                return {
                    asset: cost.asset.value,
                    attitudeAndimplementationMethod: cost.attitudeAndimplementationMethod.value,
                    capacity: cost.capacity.value,
                    numberOfPays: cost.numberOfPays.value,
                    totalCostsWithoutVatAndDiscounts: cost.totalCostsWithoutVatAndDiscounts.value
                }
            }),
            extraCosts: extraCosts.map((extraCost)=> {
                return {
                    asset: extraCost.asset.value,
                    quantity: extraCost.quantity.value,
                    piecePrice: extraCost.piecePrice.value,
                    totalCostsWithoutVatAndDiscounts: extraCost.totalCostsWithoutVatAndDiscounts.value
                }
            })
        }
        // const formData = new FormData()
        // formData.append("clientReferenceNumber", "finalSectionOne.clientReferenceNumber")
        const data = await axios.post("/api/v1/generate-terms-and-conditions-file", {
            sectionOne: finalSectionOne,
            sectionTwo: finalSectionTwo,
            sectionThree: finalSectionThree
        })

        const response = data.data
        setWaitState(prevState=>({
            ...prevState,
            isSendingRequest: false,
            fileURL: response.fileURL
        }))
    }

    return <section className='sections_container'>
        <Form>
            <div className='section_container'>
                <SectionTitle sectionNumber={1} title='الملخص' />
                <Divider />
                <ReusableForm label='الرقم المرجعي للعميل' value={sectionOne.clientReferenceNumber} name='clientReferenceNumber' onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='الرقم المرجعي للتقرير' value={sectionOne.reportReferenceNumber} name='reportReferenceNumber' onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='الرقم المرجعي لشروط الاتفاقية' value={sectionOne.termsOfEngagementReferenceNumber} name='termsOfEngagementReferenceNumber' onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='رقم الترخيص' name='serialNumber' value={sectionOne.serialNumber} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='مدير المشروع' name='projectManager' value={sectionOne.projectManager} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='يشار الى العميل كشركة مسجلة في' value={sectionOne.companyRegisteredIn} name='companyRegisteredIn' onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='تحمل عنوانا مسجل في' name='clientAddress' value={sectionOne.clientAddress} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='يمثلها السيد' name='clientOwner' value={sectionOne.clientOwner} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='منصبه' name='clientPosition' value={sectionOne.clientPosition} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} />
                <ReusableForm label='رقم الجوال' name='clientPhone' value={sectionOne.clientPhone} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} type='tel' />
                <ReusableForm label='الايميل' name='clientEmail' value={sectionOne.clientEmail} onChange={(e)=> changeSectionsHandler(e, setSectionOne)} type='email'/>
            </div>
            <div className='section_container'>
                <SectionTitle sectionNumber={2} title='غرض التقييم والأصول' />
                <Divider />
                <ReusableForm label='غرض التقييم' value={sectionTwo.aimOfEvaluation} name='aimOfEvaluation' onChange={(e)=> changeSectionsHandler(e, setSectionTwo)} />
                <ReusableForm label='أساس القيمة' value={sectionTwo.baseValue} name='baseValue' onChange={(e)=> changeSectionsHandler(e, setSectionTwo)} />
                <SubHeading subHeading='الأصول' />
                <div className='overflow'>
                <Table striped bordered hover>
                    <thead className='text-center'>
                        <tr>
                            <th>#</th>
                            <th>وصف الأصل</th>
                            <th>الكمية</th>
                            <th>المساحة</th>
                            <th>التصنيف الرئيسي / الفرعي</th>
                            <th>العنوان</th>
                            <th>إجراء</th>
                        </tr>
                    </thead>
                    <tbody className='text-cenetr'>
                        {assets.map((asset, index)=> {
                           return <tr key={index}>
                                <td>{index+1}</td>
                                <td><Form.Control required name={asset.description.name} onChange={(e)=>changeArrayStatesHandler(e, index, assets, setAssets)} value={asset.description.value} /></td>
                                <td><Form.Control required name={asset.quantity.name} onChange={(e)=>changeArrayStatesHandler(e, index, assets, setAssets)} value={asset.quantity.value}/></td>
                                <td><Form.Control required name={asset.capacity.name} onChange={(e)=>changeArrayStatesHandler(e, index, assets, setAssets)} value={asset.capacity.value}/></td>
                                <td><Form.Control required name={asset.mainCategory.name} onChange={(e)=>changeArrayStatesHandler(e, index, assets, setAssets)} value={asset.mainCategory.value} /></td>
                                <td><Form.Control required name={asset.address.name} onChange={(e)=>changeArrayStatesHandler(e, index, assets, setAssets)} value={asset.address.value}/></td>
                                {
                                    index + 1 > 1 ? <td><Button className='bg-danger' onClick={()=>deleteAsset(index)}>حذف</Button></td> : <td></td>
                                }
                            </tr>
                        })}
                    </tbody>
                </Table>
                </div>
                <Button onClick={addNewAsset}>إضافة أصل جديد</Button>
                <SubHeading subHeading='فريق التقييم' />
                <ReusableForm label='قائد فريق التقييم' value={sectionTwo.evaluationLeader} name='evaluationLeader' onChange={(e)=> changeSectionsHandler(e, setSectionTwo)} />
                <SubHeading subHeading='الأعضاء' />
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>الإسم</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {evaluationTeam.map((team, index)=> {
                            return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><Form.Control required name={team.name.name} onChange={(e)=>changeArrayStatesHandler(e, index, evaluationTeam, setEvaluationTeam)} value={team.name.value} /></td>
                                    {
                                        index + 1 > 1 ? <td><Button className='bg-danger' onClick={()=>deleteEvaluationTeam(index)}>حذف</Button></td> : <td></td>
                                    }
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                <Button onClick={addNewEvaluationMember}>إضافة عضو جديد</Button>
                <SubHeading subHeading='طبيعة ومصادر المعلومات' />
                <Form.Control as={"textarea"} cols={20} rows={10} style={{resize: 'none'}} onChange={(e)=> changeSectionsHandler(e, setSectionTwo)} name='informationResources'/>
                <SubHeading subHeading='المعاينة' />
                <ReusableForm label='نوع المعاينة' value={sectionTwo.observationType} name='observationType' onChange={(e)=> changeSectionsHandler(e, setSectionTwo)}/>
                <ReusableForm label='تاريخ المعاينة المتوقع' value={sectionTwo.observationDate} name='observationDate' onChange={(e)=> changeSectionsHandler(e, setSectionTwo)} type='date'/>
                <SectionTitle sectionNumber={3} title='طبيعة ومدى عمل المقيم بما في ذلك التحقيق والمعاينة وأي قيود عليه' />
                <Divider />
                <YesNoQuestion 
                    label='هل يشمل هذا التقييم جميع المعدات الثابتة والتركيبات والتجهيزات والمعدات التي يملكها المالك والضرورية في تشغيل أو إدارة العقار؟'
                    name='isIncludeAllEquipment'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل سيتم تضمين أي عناصر، أو مفروشات، أو معدات، أو تحسينات، أو مصانع، أو تركيبات مملوكة للشاغل، أو المستأجر من هذا التقييم؟'
                    name='isIncludeElements'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل يأخذ هذا التقييم في الاعتبار أي أخطار طبيعية مثل عدم استقرار الأرض، والتعدين أو استخراج المعادن، وغاز الرادون، ومخاطر الفيضانات من جميع الآليات بما في ذلك المصادر البلورية والنهرية أو المخاطر غير الطبيعية مثل التلوث حيث توجد المواد في الأرض أو فوقها أو تحتها الناتجة عن الاستخدامات الحالية أو التاريخية؟'
                    name='isIncludeNaturalDangerous'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل يأخذ هذا التقييم في الاعتبار المواد الخطرة الأخرى الموجودة في الممتلكات أو المحفوظة فيها، مثل (على سبيل المثال لا الحصر) المخاطر الخاضعة للتنظيم، بما في ذلك المواد الكيميائية والمواد المشعة والمواد المتفجرة وأنشطة إدارة النفايات والأسبستوس والمواد المستنفدة للأوزون والزيوت والمواد الضارة، مثل مواد البناء التي تتحلل مع تقدم العمر مما يسبب مشاكل هيكلية، على سبيل المثال: الأسمنت عالي الألومينا، كلوريد الكالسيوم أو إغلاق الصوف الخشبي؟'
                    name='isIncludeDangreousMaterial'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل يشمل هذا التقييم فحوصات خاصة؟'
                    name='isIncludeSpecialDiagnose'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <ReusableForm label='الوضع القانوني للمالك (سيقدم العميل هذا المستند)' name='ownerLegalDocument' onChange={(e)=>changeSectionThreeHandler(e)} type='file' isFile={true}/>
                <ReusableForm label='شهادة الممتلكات الثابتة (سيقدم العميل هذا المستند)' name='fixedPropertiesCertificate' onChange={(e)=>changeSectionThreeHandler(e)} type='file' isFile={true}/>
                <ReusableForm label='مخططات طوابق العقار (سيقدم العميل هذا المستند)' name='realEstateFloorsPlan' onChange={(e)=>changeSectionThreeHandler(e)} type='file' isFile={true}/>
                <strong>وفي حالة عدم توافر المعلومات والمستندات المطلوبة لإجراء التقييم على النحو السليم، يتعين وضع افتراضات خاصة بشأن الطبيعة المفترضة لتلك المعلومات</strong>
                <SubHeading subHeading='الافتراضات' />
                <ul>
                    <li>العقار خال تماما من الأعباء والقيود وحقوق الارتفاق والعهود التقييدية.</li>
                    <li>لا يتم استخدام مواد خطرة في بناء العقار.</li>
                    <li>لا توجد خطط حالية من قبل السلطات البلدية والقروية من شأنها أن تؤثر على قيمة العقار.</li>
                    <li>لا توجد خطط لتغيير القوانين واللوائح المحيطة بملكية العقارات واستخدامها.</li>
                    <li>سيتم افتراض صحة البيانات (المالية أو غير ذلك) التي يقدمها العميل دون بذل العناية الواجبة.</li>
                    <li>لا يخضع العقار لأي أخطار متعلقة بالبيئة.</li>
                    <li>لا يخضع العقار لأي أخطار متعلقة بالبيئة.</li>
                    <li>المباني سليمة من الناحية الهيكلية، ولا توجد عيوب هيكلية أو كامنة أو غيرها من العيوب المادية، بما في ذلك التعفن والمواد الخطرة بطبيعتها أو غير المناسبة أو تقنيات البناء، سواء في أجزاء من المبنى قمنا بتفتيشها أم غيرها، والتي من شأنها أن تجعلنا نسمح عن طريق إصلاح رأس المال (بخلاف تلك النقاط المشار إليها أعلاه).</li>
                    <li>تم تشييد المباني واستخدامها وفقا لجميع المتطلبات القانونية واللوائح المتبعة عرفًا، وأنه لا توجد انتهاكات لمراقبة التخطيط. وبالمثل، فإن أي بناء أو استخدام مستقبلي سيكون قانونيا (بخلاف تلك النقاط المشار إليها أعلاه).</li>
                    <li>العقار متصل بالخدمات أو قابل للتوصيل دون نفقات لا داعي لها بالخدمات العامة من غاز وكهرباء ومياه وهواتف وصرف صحي وغيرها.</li>
                </ul>
                <Form.Control value={sectionThree.assumptions.value} as={"textarea"} cols={20} rows={10} style={{resize: 'none'}} onChange={(e)=>changeSectionThreeHandler(e)} name='assumptions'/>
                <SubHeading subHeading='الخروج عن المعايير' />
                <ReusableForm label='معايير التقييم الدولية (IVS 2022)' name='intrnationalCriteria' value={sectionThree.intrnationalCriteria.value} onChange={(e)=>changeSectionThreeHandler(e)} />
                <ReusableForm label='المعايير العالمية لتقييم المعهد الملكي للمساحين القانونيين (RICS 2022)' value={sectionThree.royalCriteria.value}  name='royalCriteria' onChange={(e)=>changeSectionThreeHandler(e)} />
                <ReusableForm label='قواعد مهنة التقييم وآدابها (تقييم)' name='evaluationOccupationRules' value={sectionThree.evaluationOccupationRules.value} onChange={(e)=>changeSectionThreeHandler(e)} />
                <SubHeading subHeading='التقييم' />
                <p>سيتم تقييم حصة التملك الحر بنسبة 100٪ في العقار من خلال مناهج وطرق التقييم التالية في إطار فرضية القيمة  . سيتم تسليم تقرير التقييم النهائي في.</p>
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>اسلوب التقييم</th>
                                <th>طريقة التقييم</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {evaluationMethods.map((method, index)=> {
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><Form.Control required name={method.attitude.name} onChange={(e)=>changeArrayStatesHandler(e, index, evaluationMethods, setEvaluationMethods)} value={method.attitude.value} /></td>
                                    <td><Form.Control required name={method.implementationMethod.name} onChange={(e)=>changeArrayStatesHandler(e, index, evaluationMethods, setEvaluationMethods)} value={method.implementationMethod.value} /></td>
                                    {
                                        index + 1 > 1 ? <td><Button className='bg-danger' onClick={()=>deleteEvaluationMethod(index)}>حذف</Button></td> : <td></td>
                                    }
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                <Button onClick={addNewEvaluationMethod}>إضافة اسلوب تقييم جديد</Button>
                <SubHeading subHeading='القائمة المرجعية' />
                <div>
                <YesNoQuestion 
                    label='هل عملت شركة التقييم مع عميل محتمل سابقا؟'
                    name='doYouWorkWithOtherClient'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <ReusableForm label='(إذا نعم) ماهي طبيعة العميل المحتمل؟' value={sectionThree.otherClientWork.value} name='otherClientWork' onChange={(e)=>changeSectionThreeHandler(e)}/> 
                <ReusableForm label='(إذا نعم) ماهي استراتيجية العمل لتخطي تضارب المصالح؟' value={sectionThree.otherClientWorkStrategy.value} name='otherClientWorkStrategy' onChange={(e)=>changeSectionThreeHandler(e)}/> 
                <YesNoQuestion 
                    label='هل عمل أي من الشركاء بصفة شخصية مع العميل المحتمل سابقا؟'
                    name='doPartenersWorkPersonallyWithOtherClient'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل يعرف أي من الموظفين العاملين في التقييم (بما في ذلك الشركاء) أيا من موظفي الشركة العميلة المحتملة؟'
                    name='doPartnersOrEmployeesKnowSomeoneFromClient'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل لدى أي من الموظفين (بما في ذلك الشركاء) أي مصلحة (مالية أو غير ذلك) أو احتمال مستقبلي للاهتمام بالعقار المستهدف المراد تقييمه؟'
                    name='doEmployeeHaveInterest'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تعمل شركة التقييم نيابة عن المشتري والبائع للعقار أو الأصل في نفس المعاملة أم تعمل لصالح طرفين أو أكثر يتنافسون على نفس الفرصة؟'
                    name='doCompanyWorkOnBehalfOfBuyer'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تقوم شركة التقييم بتقييم عقار أو أصل تم تقييمه مسبقا لعميل آخر من نفس المقيم أو الشركة؟'
                    name='doCompanyEvaluatesRealEstate'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تقوم شركة التقييم بإجراء تقييم لاستهلاك طرف ثالث حيث يكون لشركة المثمن علاقات أخرى مع العميل؟'
                    name='doCompanyDoConsumptionEvaluation'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل لدى أي من الموظفين (بما في ذلك الشركاء) أي معرفة مسبقة بالمعاملات السابقة المتعلقة بالعقارات المراد تقييمها؟'
                    name='doPartnersOrEmployeesKnowPreviousWork'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تعمل شركة التقييم حاليا على أي مشاريع تتعارض (بشكل مباشر أو غير مباشر) مع أعمال العميل؟'
                    name='doCompanyWorkOnProjectsWithConflictWithClient'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تعمل شركة التقييم حاليا على أي مشاريع تتعارض (بشكل مباشر أو غير مباشر) مع العقارات المستهدفة؟'
                    name='doCompanyWorkOnProjectsWithConflictWithRealEstate'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل لدى شركة التقييم والشركة العميلة المحتملة أي مديرين أو شركاء أو موظفين مشتركين؟'
                    name='doCompanyHaveParticipatedManagersOrPartnersOrEmployees'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل هناك أي مشاركة مباشرة أو غير مباشرة في الرسوم بين الوكالة والعميل؟'
                    name='doThereParticipationInCosts'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تشكل رسوم التقييم هذه جزءا كبيرا من إيرادات الوكالة للربع أو السنة (أكثر من 25٪)؟'
                    name='doEvaluationCostMoreThanTwentyFive'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل قدمت شركة التقييم أو أي من موظفيها قيمة شفهية أو إرشادية للعقار للعميل قبل التعاقد؟'
                    name='doCompanyGaveInitialPromotion'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تقوم شركة التقييم بتقييم المقرض حيث يتم تقديم المشورة أيضا للمقترض أو الوسيط؟'
                    name='doCompanyEvaluatesBorrower'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل لشركة التقييم علاقة مهنية طويلة الأمد مع المقترض أو مالك العقار أو الأصل؟'
                    name='doCompanyHaveLongTermRelationShip'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تقوم شركة التقييم بإدخال المعاملة إلى المقرض أو المقترض، والتي يتم دفع رسوم عنها إلى المقيم أو الشركة؟'
                    name='doCompanyKeyInDocument'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل لشركة التقييم مصلحة مالية في المقترض؟'
                    name='doCompanyHaveBenefits'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تعمل شركة التقييم نيابة عن مالك العقار أو الأصل في معاملة ذات صلة؟'
                    name='doCompanyWorkOnBehalfOfOwner'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تتصرف شركة التقييم أو تصرفت نيابة عن المقترض عند شراء العقار أو الأصل؟'
                    name='doCompanyBehaveOnBehalfOfOwner'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل يتم الاحتفاظ بشركة التقييم للعمل في التصرف أو تأجير التطوير المكتمل على العقار أو الأصل المعني؟'
                    name='doRealEstatePreserveCompany'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تصرفت شركة التقييم مؤخرا في صفقة سوقية تتعلق بالعقار أو الأصل؟'
                    name='doCompanyBehaveOnDeal'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل قدمت شركة التقييم مشورة مهنية لكسب الرسوم على العقار، أو الأصل للمالكين الحاليين، أو السابقين، أو مقرضيهم؟'
                    name='doCompanyGaveConsultation'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل تقدم شركة التقييم استشارات تطويرية للملاك الحاليين أو السابقين؟'
                    name='doCompanyGaveConsultationFoRealEstate'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <p>يحدد المقيم واحدا / مجموعة تعارضات أو تعارضات محتملة في المصالح (تضارب الأطراف أو تضارب المصالح الخاصة أو تضارب المعلومات السرية)</p>
                <Form.Control as={"textarea"} value={sectionThree.evaluationConflictSelector.value} cols={20} rows={10} style={{resize: 'none'}} onChange={(e)=>changeSectionThreeHandler(e)} name='evaluationConflictSelector'/>
                <SubHeading subHeading='إفصاحات' />
                <YesNoQuestion 
                    label='هل تم إبلاغ العميل بإجراءات إجراء شكوى ضد فريق التقييم الخاص بشركة التقييم كتابيا وشفهيا؟'
                    name='doCompanyReceivedComplaint'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='لا يتمتع المقيم عضو الهيئة السعودية للمقيمين المعتمدين "تقييم" / عضو المعهد الملكي للمساحين القانونيين بالمستوى المطلوب من الخبرة للتعامل مع بعض جوانب منظمات التقييم.'
                    name='evaluatorNotQualified'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <ReusableForm required={false} value={sectionThree.evaluatorSuggestsHiringAnotherCompany.value} label='يقترح المقيم توظيف شركة أخرى لتقديم بعض أو كل التقييمات التي تخضع لتعليمات خاصة (إن وجدت).' name='evaluatorSuggestsHiringAnotherCompany' onChange={(e)=>changeSectionThreeHandler(e)} />
                <YesNoQuestion 
                    label='هل تم تقييم الأصل مسبقا من قبل المقيم أو شركة التقييم؟'
                    name='doAssetsEvaluatedByEvaluatorOrCompany'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل شارك المقيم في شراء عقار واحد أو أكثر للعميل خلال فترة ال 12 شهرا السابقة لتاريخ التعليمات أو تاريخ الاتفاق على شروط المشاركة أو فترة محددة أطول أو معتمدة في نطاق تغطية شركة التقييم.'
                    name='doEvalutaorParticipatedOnPurchasingRealEstate'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل قدم المقيم سلسلة من التقييمات على مدى فترة زمنية؟'
                    name='doEvaluatorGaveSequenceOfEvaluations'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل كان المقيم قائد الفريق هو الموقّع المعتمد المستمر على التقييمات لنفس الغرض؟'
                    name='wasEvaluatorTheLeader'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل قام المقيم بتقييم الأصل لنفس الغرض إما خلال فترة ال 12 شهرا السابقة لتاريخ التعليمات أو الفترة ذات الصلة على النحو المنصوص عليه أو المعتمد في بلد الممارسة؟'
                    name='doEvaluatorEvaluatesAssetForLastTwelveMonths'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='هل شارك المقيم / شركة التقييم في شراء نفس الأصل للعميل خلال فترة 12 شهرا قبل تاريخ التقييم؟ '
                    name='doEvaluatorParticipatedAssetForLastTwelveMonths'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                <YesNoQuestion 
                    label='في الحالة التي لا يكون فيها الطرف الذي كلف بتقييم الإقراض المضمون هو المقرض المقصود، هل يفصح عن هوية المقرض المعتزم المحتمل؟'
                    name='doBorrowerExposed'
                    onChange={(e)=>changeSectionThreeHandler(e)}
                />
                </div>
                <SectionTitle sectionNumber={4} title='تسليم التقارير، الأتعاب، الشروط والأحكام' />
                <Divider />
                <SubHeading subHeading='تاريخ تسليم التقرير' />
                <ReusableForm label='التاريخ المتوقع لإنجاز هذه المهمة' value={sectionFour.expectedSubmissionDate.value} name='expectedSubmissionDate' onChange={(e)=>changeSectionFourHandler(e)} type='date'/>
                <ReusableForm label='عدد ايام العمل' value={sectionFour.workingDays.value} name='workingDays' onChange={(e)=>changeSectionFourHandler(e)} />
                <SubHeading subHeading='الملخص' />
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>البند</th>
                                <th>المبلغ (ريال سعودي)</th>
                            </tr>
                            <tr>
                                <th>اتعاب التقييم</th>
                                <td><Form.Control name='evaluationCost' value={sectionFour.evaluationCost.value} type='number' onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                            <tr>
                                <th>اتعاب إضافية</th>
                                <td><Form.Control name='extraEvaluationCost' value={sectionFour.extraEvaluationCost.value} type='number' onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                            <tr>
                                <th>الإجمالي (بدون ضريبة القيمة المضافة)</th>
                                <td><Form.Control name='totalWithoutVat' value={sectionFour.totalWithoutVat.value} type='number' onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                            <tr>
                                <th>ضريبة القيمة المضافة VAT 15%</th>
                                <td><Form.Control name='vat' value={sectionFour.vat.value} type='number' onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                            <tr>
                                <th>الإجمالي (شامل الضريبة VAT 15%)</th>
                                <td><Form.Control value={sectionFour.totalWithVat.value} name='totalWithVat' type='number' onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                        </thead>
                    </Table>
                </div>
                <SubHeading subHeading='تفاصيل فنية' />
                <p>تفاصيل الأتعاب</p>
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>الأصل</th>
                                <th>اسلوب وطريقة التقييم</th>
                                <th>المساحة (متر مربع)</th>
                                <th>عدد دفعات الأتعاب</th>
                                <th>الأتعاب (ر.س) بدون الضريبة والخصومات</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {costs.map((cost, index)=> {
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><Form.Control name={cost.asset.name} value={cost.asset.value} onChange={(e)=>changeArrayStatesHandler(e, index, costs, setCosts)} /> </td>
                                    <td><Form.Control name={cost.attitudeAndimplementationMethod.name} value={cost.attitudeAndimplementationMethod.value} onChange={(e)=>changeArrayStatesHandler(e, index, costs, setCosts)} /> </td>
                                    <td><Form.Control name={cost.capacity.name} value={cost.capacity.value} type='number' onChange={(e)=>changeArrayStatesHandler(e, index, costs, setCosts)} /> </td>
                                    <td><Form.Control name={cost.numberOfPays.name} value={cost.numberOfPays.value} type='number' onChange={(e)=>changeArrayStatesHandler(e, index, costs, setCosts)} /> </td>
                                    <td><Form.Control name={cost.totalCostsWithoutVatAndDiscounts.name} value={cost.totalCostsWithoutVatAndDiscounts.value} type='number' onChange={(e)=>changeArrayStatesHandler(e, index, costs, setCosts)} /> </td>
                                    {
                                        index + 1 > 1 ? <td><Button className='bg-danger' onClick={()=>deleteCost(index)}>حذف</Button></td> : <td></td>
                                    }
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                <Button onClick={addNewCost}>إضافة أتعاب</Button>
                <p className='mt-4'>أتعاب اضافية</p>
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>#</th>
                                <th>الأصل</th>
                                <th>العدد</th>
                                <th>سعر القطعة (ر.س)</th>
                                <th>الإجمالي (ر.س) بدون الضريبة والخصومات</th>
                                <th>إجراء</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {extraCosts.map((extraCost, index)=> {
                                return <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><Form.Control required name={extraCost.asset.name} value={extraCost.asset.value} onChange={(e)=> changeArrayStatesHandler(e, index, extraCosts, setExtraCosts)}/></td>
                                    <td><Form.Control required name={extraCost.quantity.name} value={extraCost.quantity.value} type='number' onChange={(e)=> changeArrayStatesHandler(e, index, extraCosts, setExtraCosts)}/></td>
                                    <td><Form.Control required name={extraCost.piecePrice.name} value={extraCost.piecePrice.value} type='number' onChange={(e)=> changeArrayStatesHandler(e, index, extraCosts, setExtraCosts)}/></td>
                                    <td><Form.Control required name={extraCost.totalCostsWithoutVatAndDiscounts.name} value={extraCost.totalCostsWithoutVatAndDiscounts.value} type='number' onChange={(e)=> changeArrayStatesHandler(e, index, extraCosts, setExtraCosts)}/></td>
                                    {
                                        index + 1 > 1 ? <td><Button className='bg-danger' onClick={()=>deleteExtraCost(index)}>حذف</Button></td> : <td></td>
                                    }
                                </tr>
                            })}
                        </tbody>
                    </Table>
                </div>
                <Button onClick={addNewExtraCost}>إضافة أتعاب إضافية</Button>
                <SubHeading subHeading='شروط الدفع' />
                <ul>
                    <li>لتجنب الشك، إذا تم إحباط التعليمات أو إيقاف عملية التقييم في أي وقت معين أو أي مرحلة، يحق ل "شركة التقييم" الحصول على 100٪ من الرسوم. </li>
                    <li>الرسوم المذكورة أعلاه غير قابلة للاسترداد وغير قابلة للتعديل.</li>
                    <li>من المفهوم أن دفع رسوم التقييم لا يتوقف على القيمة المقدرة أو إغلاق القرض أو أي شرط آخر تم ترتيبه مسبقا.</li>
                </ul>
                <div className='overflow'>
                    <Table striped bordered hover>
                        <thead className='text-center'>
                            <tr>
                                <th>الدفعات</th>
                                <th>تاريخ السداد</th>
                                <th>النسبة %</th>
                                <th>الإجمالي (ر.س) بدون الضريبة والخصومات</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            <tr>
                                <td>الدفعة الأولى</td>
                                <td><Form.Control name='firstPayDate' type='date' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                                <td><Form.Control name='firstPayPercentage' type='number' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                                <td><Form.Control name='firstPayTotalWithoutVatAndDiscounts' type='number' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                            <tr>
                                <td>الدفعة الأخيرة</td>
                                <td><Form.Control name='lastPayDate' type='date' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                                <td><Form.Control name='lastPayPercentage' type='number' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                                <td><Form.Control name='lastPayTotalWithoutVatAndDiscounts' type='number' required onChange={(e)=>changeSectionFourHandler(e)} /> </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <Button disabled={waitState.isSendingRequest} onClick={generateTermsAndConditionFile}>انشاء ملف الاتفاقية</Button> 
            </div>
        </Form>
        {waitState.fileURL != '' && <p className='text-center'> <a href={waitState.fileURL} download={true}>تحميل الملف</a> </p>}
        <Modal show={waitState.isSendingRequest} animation={true}>
            <Modal.Header>
                انشاء ملف الاتفاقية
            </Modal.Header>
            <Modal.Body>
                <h4 className='text-center'>الرجاء الانتظار حتى يتم تجهيز ملف الاتفاقية</h4>
            </Modal.Body>
        </Modal>
    </section>
}

export default CreateTermsOfEngagement