var mongoose=require("mongoose")
var schema=mongoose.Schema
var userschema=new schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phonenumber:{type:Number,required:true},
    password:{type:String},
    role:{type:String}
})
var usermodel=mongoose.model("user",userschema,"creds")
module.exports=usermodel