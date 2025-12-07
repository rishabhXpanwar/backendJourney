//ab abhi tk humne cmd se mongoshell use krke CRUD operation perform kiye hai 
//pr hum ye operations js ke sath krne hai
//tho uske liye scene me aata hai moongse

// mongoose help krta hai database or Javascipt ke beech me connection bnane me 
//syntax : 

// first install mongoose 
//iski website pr jakr code copy krlo // koi cheationg nhi hai isme

const mongoose = require('mongoose');


// ab scene ye hai kr ye mongoose ek promise expect krte hai hai 
//isliye hume ise ek async fun me likhna pdta hai 
// man lo us function ka name main rkh lete hai
// uss function ko execute bhi krna hoga 
// execution ke vkt whi promises vala concept of .then lagega

main().then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
  // mongodb: similar to https:
  ////127.0.0.1:27017 similar to //localhost:8080
  // /test -> name of database with which we want to form connection 

  // ek or important bat yha se database access krne se phle use ek bar cmd se run krna hoga


  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// ab  dekhte hai schema ke bare me
//schema ek blueprint hota hai kisi bhi collection ke liye
//synatx : 
const userSchema = new mongoose.Schema({
  name : { 
    type : String
  },
  email: { 
    type : String,
    required : true,
  },
  age : { 
    type : String,
    min : [18, "Nabalik Hai Tu!"],
    
  },
});
//schema ke andar kuch value declare ki hai 
// ek id db apne aap de dega har user ko jo bhi userSchema se bnaya jayga

//Model 

// model in db is like a class 
//it is used to create documents
//synatx : 
const User = mongoose.model("User", userSchema);

// is line se humare db me ek collection create ho jayge Users nam se 
// humne User likha pr db use automatically Users me convert kr dega
//const Employee = moongose.model("Employee", userSchema);

//ye db me abhi dikhega pr isme kuch bhi nhi hoga [mtlb ye collection khali hoga]

let user1 = new User({
  name : "Rishabh",
  email : "rishabh@gmail.com",
  age : 22

});

//jb tk mai ise save nhi krunga tb tk db me ye show nhi hoga

 
  user1.save().then((res) => {
  console.log(res)
  }).catch((err) => {
    console.log(err);
  });


//iske bad humne 
//Model.insert({})
//Model.insertMultiple({})


  //Model.find({condition}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}

  
  //Model.findOne({condition}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}


  //Model.findById({"id"}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}


  //Model.updateOne({condition}, {update})
  //ex : 
  //Model.updateOne({name : "Bruce"}, {age : 48}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}


  //Model.updateMany({condition}, {update})
  //ex : 
  //Model.updateMany({age : {$gt:47}}, {age : 55}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}

  //Model.findByIdandUpdate({condition}, {update}, {options}) 
  //ex : 
  //Model.updateMany({age : {$gt:47}}, {age : 55}, {runValidators : true}).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}




  //Model.deleteOne({condition})
  //ex : 
  //Model.deleteOne({name : "Bruce"} ).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}

  //Model.deleteMany({condition})
  //ex : 
  //Model.deleteMany({age : {$gt:47} ).then((res) => {
  //console.log(res)
  //}).catch((err) => {
  //   console.log(err);
  // )}

