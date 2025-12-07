//bhai ab start krte hai Mongo DB
//tho mongo download krke 
//mongosh se shell use kr skte hai cmd me 
// data base me CRUD operations perform krna hota hai tho uske liye mongosh use krte hai
//shell me CRUD operations perform krskte hai
//use <database name> is command se hum new database create bhi kr skte hai or already existing database me navigate bhi kr skte hai


//mongo me data BSON format me store hota hai
//mongo Json ko directly BSON me convert kr leta hai
//BSON : Binary JSON

//bhai ab dekhte hai document and collection
// document hota hai jaise hum sql me ek table ke andar ek row hoti hai 
//usi trha mongo me document hota hai
//row individual data ko store krti hai similarly document also store individual data
//group of documents forms a collection

//to insert data into data base :
//1. db.collection.insertOne() 
    // insertOne() : inserts one document to the collection
    // collection : collection name {agr already exist krti hai collection tho koi dikkat nhi 
    //agr nhi exist krti tho new collection create kr deta hai}
    // example
    // db.student.insertOne({name:"Rishabh",age:22,gender:male})

    
    // db.student.find() 
    //show all the data in the student collection
//2. db.collection.insertMany([array of document])
    // example
    // db.student.inertMany([{name : "Rishabh", age: 22, marks : 97}, {name : "Vivek", age : 21, city: "Merrut"}])


// Find in DB

//1.db.collection.find()  : shows everything in the collection

//2. db.collection.find({key:value, key:value,.....}) : shows all the documents referencs in a cursor with the matching condition
    //example : 
    //db.student.find({city:"Delhi"})
    // bhai ye original document nhi deta blki uski ek reference deta hai cursor me []

    //example 2 :
    //db.student.find({city : "Delhi", age : 21})

//3.db.collection.findOne({key:value})  : shows only one document with the matching condition


//ab baat krte hai query operators ki
// query operator me hum conditional statements , logical operators vager avgera use krskte hai

//example : 
//db.collection.findOne( {marks : {$gt:75}});
// yha pr key : value pair ke andar value ke andar bhi key : value use krte hai
// $ sign use krte hai
//gt : greaterthan
//gte : greater than equal


// in : isme hum check krte hai ek group of elements se 
// db.collection.findOne({city : {$in : ["Delhi","Mumbai"]}});
//isme in a group me search krte hai

// db.collection.findOne({$or: [ {marks : {$gt:75}},{city : {$in : ["Delhi","Mumbai"]}]})
//isme or ka use kr rhe hai isme marks ya city me se koi bhi ek condition pass ho jaye tho result me aajayga 
//city me bhi in ka use kr rhe hai tho delhi mumbai me se koi bhi aagya tho pass ho jayga 

// updateOne() : update a single document at a time 
// syntax : db.selection.updateOne(<filter/condition>, <update>,<option>)
//example : 
//db.collection.updateOne({name : "Rishabh"},{$set: {marks:95}});

//updateMany() : updates all the document with the matching filter

//replaceOne() : replaces one document that matches the filter 
// replace kr deta hai purane document ko naye se 

// iske bad aata hai deleteOne() and deletemany()


//


//








