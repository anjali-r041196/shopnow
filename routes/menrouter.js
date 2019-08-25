var express=require('express');
const router=express.Router();
var mongoose=require("mongoose")
var bodyparser=require("body-parser")

var url="mongodb://127.0.0.1:27017/shopping"
var user4=require("../model/user4")
router.use(bodyparser.urlencoded({extended:true}))
router.get("/",function(req,res){
    user4.find({},function(err,result){
       if(err) throw err
       else{
    res.render("men",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
       }
    })
})
router.get("/singlem/:id",function(req,res){
    var u=req.params.id
    user4.find({},function(err,result){
       if(err) throw err
       else{
    res.render("singlem",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result[u]})  
       }
    })
})


module.exports=router;