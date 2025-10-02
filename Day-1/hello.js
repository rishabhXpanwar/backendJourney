console.log("Hello World");
// node js ek runtime environment hai js ke liye 
// node js hume js ko browser ke bahar use / run krne ke liye allow krta hai
// node js me hum js ke sath sath c++ or c ki bhi functionalities use kr skte hai
// node js me hum file system, network, operating system vagera ke sath interact kr skte hai jo ki browser me possible nhi hai
// pr node js me hum browser ki tarah DOM (Document Object Model) or BOM (Browser Object Model) ko access nhi kr skte hai

// node js me hum npm (node package manager) ka use krke bahut sare open source libraries or frameworks use kr skte hai jaise express, react, angular, vue vagera


// ab dekhte hai ke node js ko direct command prmpt se kaise run krte hain ?
// cmd se koi file create krni ho tho us directory me jao jaha file create krni hai fir [ type nul> ya touch ]fileName.js likho
//example type nul > hello.js
// fir node fileName.js likho to run the file


// direct cmd me he node environment use krke js code run krna tho usee repl (read eval print loop) kehte hain


//process object
// process object ke through hum apne system ke bare me information le skte hain
console.log(process.platform); // OS platform
console.log(process.version); // Node version

//isme ek important property hoti hai argv (argument vector) jo command line arguments ko access krne ke kaam aati hai
// ye ek array return krta hai jisme pehla element node executable ka path hota hai aur dusra element script file ka path hota hai
// uske baad jo bhi arguments diye gaye hote hain wo aate hain

// for example agar hum command line me likhte hain
// node hello.js arg1 arg2 arg3
// tho process.argv kuch is tarah dikhega    
// [ 'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\path\\to\\your\\script\\hello.js',
//   'arg1',
//   'arg2',
//   'arg3' ]   
//ise access krne ke liye loop ka use kr skte hai 
let args  = process.argv;
for(let i = 2;i<args.length;i++)// i=2 because first two elements are node path and script path
{
    console.log("hello to " + args[i]);
}

//module.exports and require topic start krte hai 

// hum apne kaam ko easy or flexible bnanae ke liye usee chunks me divide kr dete hai jise modules kehte hai
// har module apne aap me ek independent unit hota hai jise hum alag se develop, test or maintain kr skte hai
// module ke andar hum variables, functions, classes vagera define kr skte hai or unhe export kr skte hai taaki dusre modules unhe use kr saken

//module.exports ek variable hota hai or object type ki value leta hai jo current module ko export krta hai taaki dusre modules usse import kr saken
// jab hum koi file create krte hain to wo ek module hoti hai
// har module ke paas ek module object hota hai jisme ek property hoti hai exports jo initially ek empty object hoti hai
// hum is exports object me properties aur methods add krke unhe export kr skte hain

//require keyword se hum us exported module ko apne current module me access krte hai

//for example lets create a module or file named math.js
// math.js
/*const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
module.exports = {add,subtract};*/

// ab is module ko hum apne hello.js me import kr skte hain 
const importedmodule = require('./math'); // ./ ka matlab current directory se hai
console.log("Addition: " + importedmodule.add(5,3));//imported module ek obj hai jisse hum add or sub method access kr rhe hai

//module.exports ko likhne ke alternatives
//module.exports add = (a,b) => a+b;
//exports add = (a,b) => a+b;
//module.exports obj; // obj = { add: (a,b) => a+b, subtract: (a,b) => a-b };
//exports = 5 ; //ye galat hai q ke ise ek obj return krna chaiye

// To export a directory as a module
// agar hum kisi directory ko module ke roop me export krna chahte hain to us directory me ek index.js file create krte hain
// us index.js file me un sare modules ko import krte hai jo us directory me hai or fir us obj ko export kr dete hain
// for example 
// lets create a directory named fruits which contain two files apple.js and banana.js and an index.js file

const impodirec = require('./fruits'); // ye fruits directory ko import krta hai in a object named impodirec[imported directory]
// ye sidhe baat chet index.js se krega or index.js me jo kuch bhi export hoga vo impodirec me aa jayega
console.log(impodirec.apple);
console.log(impodirec.banana.color);// ye banana module ke color property ko access krta hai
// directory import krne ke liye index.js file hona jaruri hai us directory me

// NPM (Node Package Manager) ek package manager hai jo Node.js ke sath aata hai
//1. npm is a library of packages that are open source and free to use
//2. npm is a command line tool that helps to install, update, and manage packages

// npm me bhut sare paackages hote hai or hum un packages ko use krte hai or new packages bhi create kr skte hai

// npm me commands hoti hai jo hum command line/terminal me use krte hai

// I. npm install <package-name> : ye command kisi package ko install krne ke kaam aati hai

// example : hum ek figlet package install krte hai 
//figlet nam ke directory banai or fir us directory me npm install figlet execute kr dia

// install krne ke bad 3 files aati hai 
//1. node_modules : isme sare dependencies hoti hai jo figlet package ke liye jaruri hoti hai


//2. package.json : isme package ke bare me information hoti hai jaise name, version, description, main file, scripts, author, license, dependencies etc.
// man lo ke hum se node modules delete hogya tho jo bhi dependencies thi vo tho gyi tho ab code run nhi krega 
// to agr humare pas package.json hai tho hume bs 'npm install' command likhni hai or vo package.json ki help se automatically sari dependencies ko dubara se install kedega


//3. package-lock.json : isme dependencies or sub dependencies ke version ke bare me information hoti hai


// figlet package me ab ek index.js file banani pdege 
//jaise cpp or java vagera me hota hai ke execution main function se start hota vaisa he yha hota hai jb hum koi package use krte hai
// jaise jb humne ek dusri directory fruits ko import kiya tha to usme index.js  file create ki thi jo us directory ke sare modules ko import krke ek obj me export kr rhi thi
// vaise he ab hume figlet me bhi ek index.js file banani pdege 
// ab ye index.js file ko hum directly bhi execute kr skte hai ya fir apni main js file me import bhi kr skte hai module.exports ka use krke


// II. npm init : ye command ek package.json file create krne ke kaam aati hai
// jab hum npm init command execute krte hai to hume kuch questions puchhe jate hai 
// jaise package name, version, description, entry point, test command, git repository, keywords, author, license etc.
// in questions ke answers dene ke bad ek package.json file create ho jati hai
// ab agr hum is directory me koi package install krenge tho vo humare package.json me update ho jayga [dependencies me]

// III. npm init -y : ye command bina kisi questions ke package.json file create kr deti hai default values ke sath

// bhai agr kisi package ko globally install krna hai jisse ki vo khi se bhi accessible ho tho 
//phle admin control lo fir chaye cmd ho ya terminal 
// fir likho npm install -g <package.name> // -g ka matlab globally hota hai
// fir ise apne project se link kro : npm link <package.name>

// chlo ab require vs import dekhte hain
// require vhi jo hum abhi use kr rhe the module.exports ke sath
// import same kam krne ke liye aaya hai jo JS version ES6 me introduce hua tha
// import syntax : import {module} from 'package-name.extention[js, json, node]';
// import agr hum use kr rhe hai hai tho hume us directory ke package.json me ek new field 
// add / ya purani value update krna padega : "type" : "module"
// import ke case me module.exports[variable] ke jagha directly export [keyword] use krte hai 

// import me hum select kr skte hai hume package me se kya kya import krna hai which is not the case in require

// require is synchronous whereas import is asynchronous
// man lo ke humare pass ek bada module hai jisme bhut sare functions hai or hume usme se sirf ek function use krna hai
// tho require me pura module load hoga [q kw ye synchronous hai ] chahe hume sirf ek function use krna ho jo time consuming ho skta hai
// require can be called conditionally whereas import cannot be called conditionally
// require can be used anywhere in the code whereas import must be at the top of the file

// example 
import {add, PI} from './math.js';
console .log("Addition using import: " + add(10,5));
console.log("Value of PI: " + PI);
// ab humne math.js me export keyword use kiya hai to hume us directory ke package.json me "type" : "module" add krna pdega
// ideally hume ya tho sirf require use krna chaiye ya fir sirf import use krna chaiye

// type ki sirf 1 value ho skti ya tho "commonjs" ya "module"  
// commonjs me hum require use krte hai or module me import use krte hai
// agar hum type ko commonjs krte hai to hum import use nhi kr skte hai or vice versa
// or ek or bat hum json file me comment nhi likh skte 

