import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config()


const db_Uri= process.env.db_Uri

export const callDb = async ()=>{
    try {
        await mongoose.connect (db_Uri)
        console.log("DB Connected")
    }catch (e){
        console.log(e)
    }
}