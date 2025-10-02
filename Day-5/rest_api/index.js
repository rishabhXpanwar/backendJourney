const express = require("express");
const app = express();
const path = require("path");

const {v4 : uuid4 } = require('uuid');//unique id generate krta hai : aage pta chalega iske bare me 

const methodOverride = require('method-override');// aage pta chelega 

const port = 8080;

app.use(express.urlencoded({extended : true}));




app.set("view engine","ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public")));

app.use(methodOverride('_method'));
//yha hum express ko bta rhe hai ke query string me _method jaise kuch dikhe tho vha pr method override use krna hai

//bhai isme hum ek quora post ka page bna rhe hai
//isme posts honge
//har post ka username hoga
//kuch content hoga
//edit hoga
//delete hoga 

let posts = [
    {
        id : uuid4(),
        username : "rishabh",
        content : "hey I am here "
    },
     {
        id : uuid4(),
        username : "vivek",
        content : "hey I am in merrut "
    }, 
    {
        id : uuid4(),
        username : "Shubhum",
        content : "hey I am in Bali "
    },

];




app.get("/posts", (req,res) => {
    res.render("index.ejs",{posts});
});


//ab bhai dekhte hai ke new post kaise add krenge 
//hum ek new route bnynge /posts/new is route pr get request aayge or ek html page hoga 
//us page pr form bna denge or vo return post request krega

app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

// app.post("/posts", (req,res) => {
//     let {username , content } = req.body;
//     posts.push({username , content });
//     res.send("post added successfully")
// })

// ab isme ek dikkat hai pr 
// vo dikkat ye hai ki abhi hume /posts/new pr jana pd rha hai post create krne ke liye
//or post create krne ke bad bhi hum /posts/new page pr he rhte hai pr hum chate hai hum all posts vale page pr aajaye
// so now comes res.redirect(URL)
// res.redirect by default get request bhejta hai 

app.post("/posts", (req,res) => {
    let {username , content } = req.body;
    // bhai  username or content tho form se aagya pr id ka kya 
    //tho unique id bnane ke liye hum ek package hai uuid krke use install or require kr lete hai
    // so
    let id = uuid4();
    posts.push({id, username , content });
    res.redirect("/posts");
});


// ab agr hume kisi post ki id ke basis pr detail find krni hai tho uska route bna lete hai
//
app.get("/posts/:id", (req,res)=> {
    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    //post me vo post aajayge jiski id match ho jayge 
    //agr id match nhi hui tho undefined aa jayga
    
    res.render("iddetails.ejs", {post});

});

// ab bat krte hai patch request ke bare me 
// patch kya krta hai : existing data ko update krta hai
app.patch("/posts/:id" , (req,res) => {
    let {id} = req.params;
    // id nikal li post ki
    let newContent = req.body.content;
    // new content jo humne bheja tha patch request ke sath
    let post = posts.find((p) => id === p.id);
    // id jha match hui vha update kr do
    post.content = newContent ;
    res.redirect("/posts")
});


// bhai bht badi bakchodi aane vali hai tho tyyar ho jao
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id===p.id);
    res.render("edit.ejs",{post});
});
// bhai ab yha dikkat ho gyi hai ek
//is edit.ejs me humne ek form bnaya hai jha content edit hoga
// ab ye jo form hai ye client hai or hum hai server 
// tho jaise he form ka submit button press hoga ye form server pr ek post/get request bhejega 
//pr hum tho patch req chate hai
// pr html me forms sirf get ya post request he send kr skte hai
// tho iska solution hai : method-overide package 
// is ke bare me npm pr jake padh skte hai
// basically ye querry string me route ko override kr deta hai
// isme kya hota hai ke form ka code thoda sa change krna pdta hai 
// <form method:"post" action : "/resources?_method=PATCH" >
// action me jo resorces hai iski jagha apna route likh do baki _method=(jo bhi tumhe use krna PUT,PATCH,DELETE) vo likh do



// ab dekhte hai delete post ko
app.delete("/posts/:id", (req,res) => {
    // abhi tho hum /post/:id pr he apni post,patch,delete req bhej rh hai
    // pr aisa compulsory nhi hai
    //hum chaye tho /post/:id/delete pr bhi delete req bhej skte hai pr hume vhi change index.ejs me bhi krna hoga
    let {id} = req.params;
    posts = posts.filter((p) => id!==p.id);
    //filter function kya krega ke jin posts ki id match nhi hogi unhe rhne dega or jiski id match ho jayge use filter kr dega 
    res.redirect("/posts");
})

app.listen(port,(req,res) => {
    console.log(`Listening on Port : ${port}`);
});

