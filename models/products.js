
const mongoose=require('mongoose'),
      products=new mongoose.Schema({
        title:{
            type:String,
            required:true,
        },
        imageUrl:{
            type:String,
            required:true,
            unique:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        qtyInStock:{
            type:Number,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        reviews:{
            type:Number,
            required:true
        },
        isBestSeller:{
            type:Boolean,
            required:true,
            default:false,
        }
      },
      {
        timestamps:true
    });
const Products=mongoose.model("Products",products);
module.exports=Products;