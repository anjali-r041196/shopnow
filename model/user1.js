var mongoose=require("mongoose")
var schema=mongoose.Schema
var user1schema=new schema({
 image:{type:String}  , 
 heading:{type:String},
 price:{type:Number},
 body:{type:String}
})
var user1model=mongoose.model("user1",user1schema,"value")
module.exports=user1model