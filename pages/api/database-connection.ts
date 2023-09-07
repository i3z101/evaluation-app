import mongoose, { Mongoose } from "mongoose";


const connectToDb = async(): Promise<void> => {
    try {
        await mongoose.connect("mongodb://localhost:27017/evaluation-app")
        console.log("CONNECTION ESTABLISHED")
    }catch(err: any) {
        throw Error(`Error in database connection ${err.message}`)
    }
}


export default connectToDb