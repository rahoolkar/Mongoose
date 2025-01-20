//requiring the mongoose package 
const mongoose = require("mongoose");

//creating a connection  
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); //this is a async operation
}

//handling the promise
main.then(()=>{
    console.log("connection was created")
}).catch((error)=>{
    console.log(error);
}) 

//definfing schema
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

