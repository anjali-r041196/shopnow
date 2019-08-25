var mongoose=require("mongoose")
var schema=mongoose.Schema
var user4schema=new schema({
 image:{type:String}  , 
 heading:{type:String},
 price:{type:Number},
 body:{type:String}
})
var user4model=mongoose.model("user4",user4schema,"value3")
module.exports=user4model