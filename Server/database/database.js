
import mongoose from "mongoose";
mongoose.set('strictQuery', true);

export const databaseconnection = async (MONGO_URL) => {
    
    try {
        await mongoose.connect(MONGO_URL, {useUnifiedTopology: true , useNewUrlParser:true})
        console.log("database connected!")
    } catch (error) {
        console.log(error.message);
    }
};

export default databaseconnection;