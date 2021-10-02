const mongoose=require('mongoose'),
    user=new mongoose.Schema({
          name:{
              type:String,
              required:true
          },
          email:{
              type:String,
              required:true,
              unique:true
          },
          password:{
              type:String,
              required:true
          },
          isAdmin:{
              type:Boolean,
              required:true,
              default:false
          }
    },{
        timestamps:true
    }),

    User=mongoose.model("User",user);

    module.exports=User;