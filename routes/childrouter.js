var express=require('express');
const router=express.Router();
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
var url="mongodb://127.0.0.1:27017/shopping"
var user2=require("../model/user2")
router.use(bodyparser.urlencoded({extended:true}))
router.get("/",function(req,res){
    user2.find({},function(err,result){
       if(err) throw err
       else{
    res.render("child",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
       }
    })
})
router.get("/singlc/:id",function(req,res){
    var g=req.params.id
    user2.find({},function(err,result){
       if(err) throw err
       else{
    res.render("singlc",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result[g]})  
       }
    })
})


module.exports=router;