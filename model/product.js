const mongoose=require("mongoose")


const productSchema= new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    location:{type:String,required:true},
    postedAt:{type:String,required:true},
    price:{type:String,required:true},
})

const ProductModel=mongoose.model("Products",productSchema)

module.exports={ProductModel}