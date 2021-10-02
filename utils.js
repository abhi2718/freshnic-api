const jwt=require("jsonwebtoken");
exports.generateToken=userInfo=>
jwt.sign(userInfo,process.env.JWT_SECRET_KEY,{
    expiresIn: 60 * 60 * 24 // expires in 24 hours
 });

exports.isUserLoggedIn=(req,res,next)=>{
    const {authorization}=req.headers;
    const token=authorization?authorization.slice(7,authorization.length):null;
    
    if(token){
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
            if(err){
                res.status(404).json({errMsg:"Invalid token"})
            }else{
                console.log(user);
                req.user=user;
                next();
            }
        })
    }else{
        res.status(404).json({errMsg:"Token does not found "})
    }
   
}
module.exports=exports;