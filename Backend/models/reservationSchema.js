import mongoose from "mongoose";
import validator from 'validator';

const reservationschema = new mongoose.Schema({
     firstName:{
        type:String,
        required:true,
        minlenght:[3,"first name must conatin at least three character"],
        minlenght:[36,"you can not axcced 36 chracter"],
     },
     lastName:{
        type:String,
        required:true,
        minlength:[3,"last name must conatin at least three character"],
        maxlength:[36,"you can not axcced 36 chracter"],
     },
     email:{
        type:String,
        required:true,
        validate:[validator.isEmail,'provide a valid email'],
     },
     phone:{
        type:String,
        required:true,
        minlength:[10,'phone number must contaion only 10 digit'],
        maxlength:[10,'phone number must contaion only 10 digit'],
     },
     time:{
        type:String,
        required:true,
     },
     date:{
        type:String,
        required:true,
     },
           
});
export const Reservation = mongoose.model('Reservation',reservationschema);