var mongoose=require("mongoose")
var schema=mongoose.Schema
var user3schema=new schema({
 image:{type:String}  , 
 heading:{type:String},
 price:{type:Number},
 body:{type:String}
})
var user3model=mongoose.model("user3",user3schema,"value2")
module.exports=user3model