import mongoose from "mongoose";

export const connectDB = async() : Promise<void> => {
    const uri = process.env.MONGO_URI;
    if(!uri){
        throw new Error("MONGO_URI is not in the .env file");
    }
    try{
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch(err){
        console.log("MongoDB is not connected", err);
        process.exit(1);
    }
}