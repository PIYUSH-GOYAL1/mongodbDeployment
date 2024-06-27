const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://piyushgoyal11824:6JtwzwQXWotEzvD1@testcluster.vgvzmvb.mongodb.net/build?retryWrites=true&w=majority&appName=TestCluster", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("Connection failed: " + error.message);
    }
};

module.exports = connectDB