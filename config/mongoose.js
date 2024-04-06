const mongoose = require("mongoose");

const url= "mongodb://127.0.0.1:27017/blogs"
async function connectToMongoose(){
    try{
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Succesfully Connected to Database....");
    }
    catch(err){
        console.log(err);
        return "something went wrong with Ur database";
    }

}

module.exports = connectToMongoose;