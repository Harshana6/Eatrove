class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddlware = (err,req,res,next)=>{
    err.message = err.message || "internal server Error";
    err.statusCode = err.statusCode||500;

    return res.status( err.statusCode).json({
       success: false,
       messsage:err.message,
    })
}
export default ErrorHandler;
