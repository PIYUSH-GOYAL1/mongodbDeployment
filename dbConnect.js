const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://piyushgoyal11824:6JtwzwQXWotEzvD1@testcluster.vgvzmvb.mongodb.net/build?retryWrites=true&w=majority&appName=TestCluster")
        console.log("Connect to MongoDB successfully")
    } catch (error) {
        console.log("Connect failed " + error.message )
    }
}

module.exports = connectDB