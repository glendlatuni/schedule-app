import mongoose from "mongoose";


const connectMongoDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("CONNECT TO MONGODB")
    } catch (error) {
        console.log("ERROR")
    }
}

export default connectMongoDB;