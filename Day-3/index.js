//EJS in express js
// EJS ka mtlab hai Embedded JavaScript templating
// EJS ek templating engine  jis se hum bht sare html pages ko generate kr skte hai 
// EJS me hum html code ke andar javascript code embed kr skte hai jisse hum dynamic html pages create kr skte hai


//npm i express
//pichle vala express sirf pichli directory [day-2] tk simit hai q ke globally tho install kia nhi tha 
const express = require('express');
const { networkInterfaces } = require('os');

//npm i path

const path = require('path');// tension na lo munna , niche btaya hai is ke bare me

// express ejs ko bydefault internally require kr leta hai isliye humne ejs ko alag se require nhi kia hai

const app = express();

const port = 8080;


app.set('view engine','ejs');
// ye line express ko btati hai ke hum ejs templating engine use kr rhe hai

// phle jb hum app.get use krte the tho usme res.send function ka use krte the
//send function : string,html code , object, boolean vagera bhej skta hai
// pr agr hume ek puri file bhejni hai client ko server se jisme html css js sb kuch ho 
// tho hum use krte hai res.render('filename.ejs')
//.ejs na bhi likho tho chl jata hai pr aachi practice yhi hai ke likho

// upar vale code se hum view engine ko ejs pr set kr rhe hai
// views ka mtlb templates folder hota hai jisme hum apne sare ejs files rkhte hai
// bydefault express views folder ko hi view folder manta hai
// agar hum chahte hai ke hum apne ejs files kisi aur folder me rkhna chahte hai tho hum ise change kr skte hai
// app.set('views','myviews'); // isse hum apne views folder ka naam change kr skte hai

//example

app.get('/', (req,res) => {
    //res.send("This is home page");

    res.render('home.ejs');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// ab bhai dekho chull bhut badi cheez hai
// hum day-3 directory me jake run krenge apne server ko tho vo chalega : all ok
// hum is day-3 ko uski parent directory se bhi run kr skte hai
// vo kaise
// vo aise : 1. phle parent directory me jao : cd .. use krke
// 2. node Day-3/index.js

// pr agr mai ise use krunga tho ek dikkat ho jayge 
// ab kya hoga ke ejs jo hai na vo views nam ke folder ko dhundega templates ke liye
// pr vo us directory me dhundega jha se use call kia gya 
//mtlb agr maine usee node directory se call kia tho vo views folder ko node directory me dhundega

// solution : 
// const path = require('path'); // path package ko import kr rhe hai//upar kr chuke hai 

//a1(ek code diya hai reference ke liye jisse aage jb mai ise discuss kru tho aasani ho reference ke liye)
//app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public")));
//is ke bare me aage btaya hai
//a1


app.set('views', path.join(__dirname,'/views'));


//app.set() use kr rhe hai , set krne ke liye
// path.join ek fun hai path package ka 
//__dirname : parent directory ka name + us directory ka name jha ye expression likha hai , mtlb (in our case) : Node-JS/Day-3
// fir uske bad '/views' tho humne likha he hai

// is code se kya hoga ke parent dir Day-3 dir ke views se join ho jayge



// interpolation Syntax

//isme hum apne js code me expressions embed kr skte hai in to the marked up text
// jaise : console.log('this is a embeeded text ${name}');
// ab ye tho bhut he chote level ka kam hai 
// aur upar level pr agr jaye tho is se hum apne html ko dynamic bna skte hai 
// dynamic mtlb ke hum input ke basis pr output calculate krke bhejenge
// ejs ko use krne ke liye hum tags ka use krte hai

//example 
// if we write in html file
// <h3> <%= 1+3 %> </h3> 
// it will print 4 and not 1+3 
// we used the <%=...%> tag


//example 2
//<h2> <%= "apnacollege".toUpperCase()%></h2>

//exapmle 3 

//<h2><%= ["hello","bonjur", "namaste"][0] %></h2>
//output  : hello 






// lets make a route rolldice

app.get("/rolldice", (req,res) => {
       let diceval = Math.floor(Math.random()*6)+1;
       // ab bhai dekho bat aise hai ke jb agee hum backend me kam krenge tho hume data milega database se 
       // tho use data pr kam krna hoga 
       // tho man lo ye diceval koi data hai jo hume mila hai 
       //ab ek template bnani hai rolldice or usme is data ko bhejna bhi hai or use bhi krna hai
       //so
       res.render("rolldice.ejs",{num : diceval});
       // ab jo ye render fun hota hai na ye ek file leta hai or ek object bhi leleta hai
       // object me vhi key value pair hote hain
       // ab ek rolldice.ejs file bnai hai views folder me 
       //vo tumhe pta hai ke views folder me he q bnai 
       // ab us file me interpolation syntax ka use kr ke apne html ko dynamic bna dia hai
       //jo ye { num : diceval} hai ye key value pair hai 
       // key value pair ko key ke through access kia ja skta hai
       // jaise ke humne kia bhi hai rolldice.ejs me
       // iska alternative {diceval : diceval} mtlb key or value ka name same ho skta hai
       // {diceval} mostly singly value bhejni hoti hai ejs file ko tho directly value bhi pass kr skte hai bina key ke
        // rolldice me ek or chiz use kri hai 
        // if ka use kiya hai 
        // rolldice.ejs me jake dekhna chaiye
        // conditional statement use krne ke liye <%..%> ka use krte hai

});

// next ab hum ek instagram ka page bante hai 
// app.get("/ig/:username", (req,res) => {
//   let { username } = req.params;
//   res.render("instagram.ejs", { username });
// });
// for loop in ejs

// app.get("/ig/:username", (req,res) => {
//   // lets create an array of names that follows you
//   const follower = ["Vivek","Sahil","Rawat"];
//   let { username } = req.params;
//   res.render("instagram.ejs", { username,follower });
// <!-- // ye code hai data.json se phle jo sikh rhe the uske liye -->
// <!-- This page belongs to : @<%= username %>
//         <br>
//         <button>Follow</button>
//         <button>Message</button> -->


//         <!-- <h4>Accounts that follows you : </h4>
//         <ul>
//             <% for(let names of follower){%>
//                 <li>
//                     <%= names %>
//                 </li>
                
//                 <%}%>
//         </ul> -->
// });

// ab dekhte hai ke ek data file se kaise data ko use krna 
//example ke liye ek data.json file hai vo use kr rhe hain
//now 

app.get("/ig/:username", (req,res) => {
 // phle us data.json file ko aache se read krlo taki pta chl jaye ke kya kya data hai or kis format me hai
 let { username } = req.params;
 const Instadata = require("./data.json");
 //data ki file ko require krna pdta hai
 // humne ek variable me data file ko require kr lia hai 

 let data = Instadata[username];
 // ab data file ke andar bhut sara data hoga pr hume sirf ek specific username ka data chate hai 
 //tho uss username ke data ko data variable se access kr rhe hai
 if(data)
 {
   res.render("instagram.ejs", { data });
 }
  // instagram.ejs ko vo data bhej diya hai
  // ab us data ko use krke hum apna html code dynamic bna rhe hai 
  // uss data ko use kr lia hai
  //instagram.ejs : 
//   <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>insta</title>
//     <style>
//         img {
//             height: 200px;
//             width: 200px;
//         }
//     </style>
// </head>
// <body>
//     <h1>
        
//         This page belongs to : @<%=data.name%>
//         <br>
//         <button>Follow</button>
//         <button>Message</button>
//         <br>
//         <h3>Folowers : <%=data.followers%> &nbsp;&nbsp;&nbsp;&nbsp;Following : <%=data.following%></h3>  
//     </h1>
//     <hr/>
//     <% for(let post of data.posts) { %>
//         <img src="<%=post.image%>" alt="some img" />
//         <p>
//             Likes : <%=post.likes%> &nbsp;&nbsp;&nbsp;&nbsp; Comments : <%= post.comments%>
//         </p>
//         <%}%>
// </body>
// </html>


// ab man lo dogs or cat ek alawa kuch serach kr dia jo database me nhi hai tho 
//isliye use krenge if else

  else 
  {
    res.render("error.ejs");
  }
});

//a1
// static files agr hume bhejni hai server se client pr tho hum use krte hai
// To serve static files like CSS, images, JS, etc. from a "public" folder:
//app.use(express.static(path.join(__dirname, 'public')));  
//ise abhi jada deep me nhi pdh rhe
//aaj man nhi kr rha hai ise kl dekhte hai😂

//includes in ejs

//mam lo ke hume ek template ke andar ekor sub-template add krni hai
// tho ise hum includes se achieve kr skte hai
//iske bare me ejs website page pr bhi padh skte hai

// jo <%=....%> ye tag hai isme html escaped hokr aata hai 
//include use krne ke liye hum <%-....%> ye tag use krenge
//ab man lo hum instagram.ejs ke head vale section ko ek or template man le 
//tho hum kya kr skte hai ke ise ek naye folder includes ke andar head.ejs me store kra denge (head of html code ko)
//fir iss head.ejs subtemplate ko instagram.ejs me access krne ke liye include ka use krenge
//Syntax : <%- include(includes/head.ejs);%>
// isme vhi<%-...%> ejs tag ka use kiya hai 
//dono instagram.ejs or includes folder views ke andar he hai
// aisa krke hum same styling or head vagera bar bar use kr krte hai
// ek or example ke liye hum ek footer bna skte hai 
//is fotter me hum contact no, email,about us vager alikh skte hai or use apne pages me include kr skte hai
//tho basically agr hum chote templates ko apne maon template/html code me use krn hota hai tho hum include ka use krke vo kr skte hai







