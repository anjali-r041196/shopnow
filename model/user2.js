var mongoose=require("mongoose")
var schema=mongoose.Schema
var user2schema=new schema({
 image:{type:String}  , 
 heading:{type:String},
 price:{type:Number},
 body:{type:String}
})
var user2model=mongoose.model("user2",user2schema,"value1")
module.exports=user2model