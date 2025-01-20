//requiring the mongoose package 
const mongoose = require("mongoose");

//creating a connection  
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); //this is a async operation
}

//handling the promise
main().then(()=>{
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

//creating a collection 
const User = mongoose.model("User",userSchema); //mongoose method takes 2 argumnets 1. collection name 2.collection schema


//inserting a data in database (single data)
// const user1data = new User({name:"rahulkar",email:"rahul@gmail.com",age:23});

// //saving the document -> return a promise
// user1data.save()
// .then((result)=>{
//     console.log(result); //this will print the whole entry in the collection
// })
// .catch((error)=>{
//     console.log(error);
// })

// //inserting multiple data into the database 
// User.insertMany([{
//     name:"udayankar",
//     email:"udayan@gmail.com",
//     age:17
// },{
//     name:"utpalkar",
//     email:"utpal@gmail.com",
//     age:17
// },{
//     name:"amritakar",
//     email:"amrita@gmail.com",
//     age:17
// }]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

//find in mongoose

//find bina kisi condition ke
// User.find({}).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

//find method with conditions
// User.find({age:{$lte:20}})
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// });

//findOne Method
// User.findOne({age:17}).then((result)=>{
//     console.log(result);
//     console.log(result.name);
// }).catch((error)=>{
//     console.log(error)
// })

//update in mongoose

User.updateOne({age:{$lte:20}},{age:20})
.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})