var express=require('express');
const router=express.Router();
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
var url="mongodb://127.0.0.1:27017/shopping"
var user3=require("../model/user3")
router.use(bodyparser.urlencoded({extended:true}))
router.get("/",function(req,res){
    user3.find({},function(err,result){
       if(err) throw err
       else{
    res.render("women",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
       }
    })
})
router.get("/singlew/:id",function(req,res){
    var s=req.params.id
    user3.find({},function(err,result){
       if(err) throw err
       else{
    res.render("singlew",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result[s]})  
       }
    })
})


module.exports=router;