import mongoose from "mongoose";
import dotenv from 'dotenv';

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
          dbName :'Eatrove'
    }).then(()=>{
        console.log('DB connected')
    }).catch((err)=>{
        console.log(`some error occured while connectiong to database ${err}`);
    });
}