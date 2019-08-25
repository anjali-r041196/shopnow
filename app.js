var express=require('express')
const path=require("path")
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
var url="mongodb://127.0.0.1:27017/shopping"
var user=require("./model/user")
var user1=require("./model/user1")
var app=express();
app.use(bodyparser.urlencoded({extended:true}))
var childrouter=require("./routes/childrouter")
var menrouter=require("./routes/menrouter")
var womenrouter=require("./routes/womenrouter")
var multer=require("multer")
var upload=multer({dest:"image/"})
var type=upload.single("file1")
app.use("/child",childrouter)
app.use("/men",menrouter)
app.use("/women",womenrouter)
app.get("/",function(req,res){
    res.render("login")
})
app.use(express.static(path.join(__dirname,"/public")))
app.set("view engine","ejs")
app.set("views","./src/views")
app.get("/index",function(req,res){
    user1.find({},function(err,result){
       if(err) throw err
       else{
    res.render("index",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
       }
    })
})
app.get("/delete",function(req,res){
    user1.find({},function(err,result){
       if(err) throw err
       else{
    res.render("delete",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
       }
    })
})
app.post("/edit", type, (req,res)=>{
    user1.updateOne({heading:req.body.heading} ,{$set:{
        heading:req.body.heading,
     
        body : req.body.body,
        
        price : req.body.price,
        image : req.file.filename
    }}, (err,result)=>{
        if (err) throw err;
        else{
            user1.find({},(err,result)=>{
                if (err) throw err;
                else
                res.render("delete",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})
            })
        }
    }) 
})

app.post("/reg",type ,function(req,res){
    
    var u=new user1();
    u.heading=req.body.text1;
    u.price=req.body.text2;
    u.body=req.body.text3;
    u.image=req.file.filename;
    
    u.save(function(err){
        if(err) throw err
        else{
           user1.find({},function(err,result){
            res.render("delete",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})  
           })
        }
    })
    console.log()
    })

app.post("/del/:id",function(req,res){
    console.log(req.params.id)
    user1.deleteOne({heading:req.params.id},function(err,result){
       if(err) throw err
       else{
           user1.find({},function(err,result){
    res.render("delete",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result})
           })
       }
    })
})
app.get("/index/single/:id",function(req,res){
    var t=req.params.id
    console.log(t)
    user1.find({},function(err,result){
       if(err) throw err
       else{
    res.render("single",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result[t]})  
       }
    })
})
app.get("/delete/ed/:id",function(req,res){
    var t=req.params.id

    user1.find({},function(err,result){
       if(err) throw err
       else{
    res.render("edit",{nav:[{link:"/men",title:"men wear"},{link:"/women",title:"women wear"},{link:"/child",title:"kids wear"}],res:result[t]})  
       }
    })
})
app.get("/reg",function(req,res){
    res.render("reg")
})


app.post("/login",function(req,res){
    var p=req.body.uname
    var s=req.body.pwd
    
    user.find({name:p,password:s,role:"user"},function(err,result){
if(result.length==0){
    user.find({name:p,password:s,role:"admin"},function(err,result){
        if(result.length==0){
            
            res.redirect("/")
        }
        else{
            res.redirect("/delete")
        }
            })


}
else{
    res.redirect("/index")
}
    })

    })
 
    
            
    mongoose.connect(url,function(err){
        if(err) throw err
        else{
            console.log("database connected")
        }
    })
    app.get("/view/:id",function(req,res){
        var b=req.params.id
        res.sendFile(__dirname+"/image/"+b)
    })
    app.get("/view1/:id",function(req,res){
        var b=req.params.id
        res.sendFile(__dirname+"/image/"+b)
    })
    app.get("/view2/:id",function(req,res){
        var b=req.params.id
        res.sendFile(__dirname+"/image/"+b)
    })
    app.get("/view3/:id",function(req,res){
        var b=req.params.id
        res.sendFile(__dirname+"/image/"+b)
    })
app.post("/register",function(req,res){
    var u=new user();
    u.name=req.body.name;
    u.email=req.body.email;
    u.phonenumber=req.body.phonenumber;
    u.password=req.body.password
    u.role=req.body.role;
    u.save(function(err){
        if(err) throw err
        else{
            res.redirect("/")
        }
    })
    console.log()
    })
app.listen(process.env.PORT || 3200,function(req,res){
    console.log("started")
})

