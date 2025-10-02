//tho ab hum bat krnege get or post request ke bare me '
//jo ye get request hoti hai na isme kya hota hai ke querry string limited size ke hoti hai
// or sara data querry string me visible hota which is not safe
// get req me data sirf string ke form me jata hai
// fro example : let us create a form in which their wiil be username and password 
// when we submit this form all the data will be visible in the address bar in the form of querry string

// ise solve krne ke liye hum use kr skte hai 
//POST request 
// isme kya hota hai ke jo sara data hai vo request bidy ke andar jata hai jo querry strings me visible nhi hota
// we use post request to create/update/delete something
// in post request we can send data in any format

// generally we use get request to send some response 
// and post request when we want to change something in our database

const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get("/register", (req, res) => {
    //we can access the data from the get request using the query strng
    let { name, password} = req.query;
    res.send(`Standard Get req. Welcome ${name}!`);
});

app.post("/register", (req,res)=> {
    // ab hume pta hai ke post me jo data hai vo request ki body me hota hai
    //tho use access krne ke liye hume express ko btana pdta hai 
    //jo ki hum is code se btate hai : 
    //app.use(express.urlencoded({extended : true}));
    //ye ek middleware hai 
    //middleware ke bare me aage pdenge
    // ise likhne ke bad 
    // ek or middleware haijo json type ke data ko express ko samajne me help krta hai
    // app.use(express.json());
    // default :  express req.body ko undefined samajta hai  
    let { name, password} = req.body;
    res.send(`Standard Post req. Welcome ${name}`);
});

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});
//ab hum thoda oops ke bare me bat krnege



//OOPS in JS
// oops mtlb object oriented programming
// isme kya hita hai ke sab kuch objects ke form me hota hai
// or isse humara fayda he hota hai
//objects ke pas kuch methods or properties hoti hai
// classes: classes are blueprint for objects having similar methods nad properties

//example : man lo ek brothrel me bhut sare sluts hai
// har slut ke kuch attributes hai jaise name,age,body-count,etc,etc;
// har ek slut ke liye bar bar obj me name ,age,bodycount,rate likhne se aacha hai ke 
//ek template ho (class) jisme obj bnte he ye properties usme aajaye
//


//Prototype in JS

//prototype mtlb ek object hota hai
//JS ke sare objects ise automatically inherit kr lete hai
//isme us object ke related methods orfunctions hote hai
// ye function or methods hamari madad ke lye hote hai

//example:
//jaise he hum ek array create krte hai tho vo ek array prototype ko inherit kr leta hai
//is prototype me array ke sare methods hote hai 
//jaise for each,length,push,pop

//prototype ko access krne ke tarike :
// 1. arr.__proto__ : ye function bhi builtin fun. hota hai // ye sirf ek reference deta hai prototype obj ka
//2. Array.prototype : ye function prototype obj ko access krta hai
//3.String.prototype : gives all funtions related to string 

//jb hum apne object se koi function create krte hai tho vo memory me store ho jata hai
// but arr1.sum != arr2.sum
// chaye fun. ka nam same ho kam same ho pr ye different obj se bne hai or different location pr stored hai
//pr prototype ke sath aisa nhi hota 
// iski koi copy  nhi bnti hai (ek he location pr stored hai)
//sare obj same prototype ko use krte hai
//so "abc".toLowercase == "xyz".toLowecase ;


//bhai ek factory funtion hota hai
//factory mtlb jaha chizze bnte hai
//is function ko objs bnane ke liye use krte hai
// for example :
// function personmaker(name,age) {
//     const person = {
//         name : name,
//         age : age,
//         talk() {
//             console.log(`hi, I am ${name}`);
//         },
//     };
//     return person;
// }

// let p1 = personmaker("commatazo",24);
// let p2 = personmaker("ava adams", 27);

// pr isme bhi dikkat HTMLDetailsElement
// kya : ye ki talk function ki copy har ek obj ke liye bn jayge 
// jo ki space lega bina faltu ki

// so next is the new operator
// new operator ke bare me mdn pr jake pdh skte ho
//new operator kya krta hai ke ek constructor ka use krta hai
//or jb bhi hum new keyword ka use krte hai tho is constructor ka ek instance bn jata hai
// is instance ke pas constructor ki properties hoti hai
// example :
// function Person(name,age) {
//     this.name = name;
//     this.age = age;
// }
//  Person.prototype.talk = function() {
//     console.log(`hi, I am ${this.name}`);
//  };
//  let p1 = new Person("adam",24);

//aisa krne se talk function ki ek he copy sare objects ke liye use ho jayge 
// q ke ye talk function Person ke prototype me chla jayga 
//or jitne bhi object bnenge Person constructor se un sbke pas Person ka he prototype hoga

// ab isse aasan ek or tarika hai
//vo hai classs ka use krke
// class Person {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`hi, I am ${this.name}`);
//     }
// }
// // ab class me hume prototype me alag se change krne ke jarurt nhi hai
// //q ke class khud ek blueprint/prototype hai objects ke lye 
// let p1 = new Person("Eve",34);

//chlo tho bhai jaise he classes ka nam aaya vaise he inheritance ke bare me bhi sikhna pdega
//inheritance mtln daughter class inherits properties from parent class

//example
// class Person {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`hi, I am ${this.name}`);
//     }
// }

// class Sluts extends Person {
//     constructor(name,age,bodycount)
//     {
//         super(name,age);
//         //super keyword se parent/super class ke constructor ko value pass krte hai
//         this.bodycount = bodycount;
//     }
//     //ab yha talk() fun likhne ki zrurt nhi q ke isne vo inherit kr liya hai parent class se
// }

// let slut1 = new Sluts("Nami",24,25);


//tumhe pta he isme ek method overloading ka bhi topic hota hai (same name but different parameters)
//or ek method overriding (same name and same parameters)

