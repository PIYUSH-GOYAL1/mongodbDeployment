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
        return res.render("index");
    }catch(err){
        return res.render("error" , {err});
    }
});

app.get("/getform" , (req,res)=>{
    try{
        return res.render("form");
    }catch(err){
        return res.render("error" , {err});
    }
});

app.post("/processform" , async (req,res)=>{
    try{
        const {fullname , email , password , age} = req.body;
        const newUser = new userModel({
            fullname,
            email,
            password,
            age,
        });
        const data = await newUser.save();
        return res.send(data);
    }catch(err){
        console.error("Error creating user:", err);
        return res.render("error" , {err});
    }
});

app.listen(3000, ()=>{
    console.log("App is running on PORT 3000");
})