const express = require("express");
const app = express();
const path = require("path");
const dbConnect = require("./dbConnect");
const userModel = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname , "public")));

dbConnect();

app.get("/" , (req,res)=>{
    try{
        res.render("index");
    }catch(err){
        res.render("error" , {err});
    }
});

app.get("/getform" , (req,res)=>{
    try{
        res.render("form");
    }catch(err){
        res.render("error" , {err});
    }
});

app.post("/processform" , async (req,res)=>{
    try{
        const newUser = await userModel.create({
            fullname : req.body.fullname,
            email : req.body.email,
            password : req.body.password,
            age : req.body.password,
        });
        res.redirect("/");
    }catch(err){
        res.render("error" , {err});
    }
});

app.listen(3000, ()=>{
    console.log("App is running on PORT 3000");
})