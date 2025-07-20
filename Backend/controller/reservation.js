import ErrorHandler from '../error/error.js';
import {Reservation} from '../models/reservationSchema.js';

export const sendReservation = async(req,res,next)=>{
      console.log("DEBUG req.body:", req.body);
       if (!req.body || typeof req.body !== 'object') {
    return res.status(400).json({
      success: false,
      message: "Missing or invalid JSON body"
    });
  }
     const {firstName,lastName,email,phone,date,time} = req.body;
     if(!firstName || !lastName||!email||!phone||!date||!time){
     return next ( new ErrorHandler("please fill all required detail",400));
     }
     try{
        await Reservation.create({firstName,lastName,email,phone,date,time});
        res.status(201).json({success:true,message:"reservation created successfully"});
     }catch(error){
        if(error.name === 'ValidatonError'){
            const ValidatonError = Object.values(error.errors).map(
                (err)=>err.message  
            );
            return next(new ErrorHandler(ValidatonErrors.join('.'),400));
        }
        return next(error);
     }
};