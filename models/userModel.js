const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fullname : String,
    password : String,
    email : String,
    age : Number,
});

module.exports = mongoose.model("user" , userSchema);