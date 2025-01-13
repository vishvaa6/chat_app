import mongoose from "mongoose";

const connectTOMongodb = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to mongo db");

    }catch(error){
        console.log("Error connecting to Mongo_db",error.message);
    }
}

export default connectTOMongodb;