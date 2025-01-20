//requiring the mongoose package 
const mongoose = require("mongoose");

//creating a connection  
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/test");
}

//handling the promise
main.then(()=>{
    console.log("connection was created")
}).catch((error)=>{
    console.log(error);
})