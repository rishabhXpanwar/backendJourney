//lets start 

// express js framework 
// library vs framework 
// library is a set of pre written code that we can use to perform specific tasks
// framework is a set of pre written code that provides a structure for building applications
// framework is a skeleton or a blueprint for building applications

// library me humare pas pura control hota hai 
// framework me humare pas pura control nhi hota hai
// framework me humare pas ek predefined structure hota hai jisme hume apna code likhna hota hai

// express js ek web application framework hai jo Node.js ke upar bana hai
// express js ke mainly 4 kam hote hai 
// 1. listen for incoming requests
// 2. parse the incoming requests // iska mtlab hai ke hum request me jo data bhejte hai usse read krte hai
// 3. route the requests to the appropriate handler functions // mtlb jaise ki humne jss/home likh diya to ye request home handler function ko jayegi
// 4. send the response back to the client

// express js ko use krne ke liye hume pehle ise install krna pdega
// npm install express

const express = require("express");// isme humne ./ use nhi kiya q ke ye ek built in module hai jo node js ke sath aata hai
const app = express(); // ye express function ko call krke ek app object create krta hai
// is app object ke through hi hum apne application ke sare kam krte hai
 
//console.dir(app);

// ab hume apne application ko ek specific port pe listen krna pdega
const PORT = 3000;//8080 // ye 2 port custom server bnanae kr liye use hote hai

// port are logical endpoints of a network connection which are used to exchange informatiom between a web server and web client



//hoppscotch tool bhi use kr skte localhost pr sbhi traha ki request bhejne ke liye
//hoopscotch k use krne ke liye github/hoppscotch/discussion/2051 dekh lena




app.listen(PORT , () => {
    console.log(`app is listening on port ${PORT}`);
}); // app ke andar bht sare functions hote hai un me se ek hai listen 
// ye port pr kisi request ko listen krta hai or jab bhi koi request aati hai to ye callback function execute krta hai

// ek bar ye fun execute ho gya tho ye bar-bar request ko check krta rhyga 
// ise explicitly bnd krne ke liye cmd ya termonal me ctrl + c krna pdega

// is server ko hum apne local browser me localhost:3000 pr access kr skte hai
// ye server locally humare system pr run hoga isliye ise local server kehte hai


// is point tk server chl rha hai pr kuch response nhi de rha 
// q ke humne koi response define nhi kiya hai

// app.use ke function hai jo kisi bhi request[get,post,put,delete vagera] ko handle krskta hai 

//app.use((req,res) => {
    //console.log("request received");
    // req : ye request object hai jo client se aayi hui request ke bare me information deta hai
    // res : ye response object hai jo server se client ko bhejna hota hai
    // ye dono objects http module ke part hote hai jo node js ke sath aata hai
    // console.log(req);
    // isse request obj ke sare methods or properties print ho jayenge
    // http text me request leta hai taki us request ko koi bhi language read kr ske apne according jisme bhi hum apna code likh rhe hai jaise[python,js]
    // js me express is text req ko object me convert kr deta hai jise hum req object ke through access kr skte hai 
    // q ke js object he smj skti hai

    // console.log(res);
    // isse response obj ke sare methods or properties print ho jayenge

    //res.send(); ye function http pr response bhejne ke kaam aata hai
    //example 1 
   // res.send("Hello, this is my first response")

   // example 2 
   // let code = "<h1>Fruits </h1><ul><li>Apple</li><li>orange</li></ul>";
    //res.send(code);// ye html code ko browser me render kr dega
    // res.send ke andar hum string,html code,json object vagera bhej skte hai
    // ek path ke liye res.send ke andar hum sirf ek hi baar response bhej skte hai
    // res.send ke bad koi bhi code execute nhi hoga q ke ye function response bhejne ke bad connection ko close kr deta hai

    

//});

// routing in express js
// routing ka mtlab hai ke hum apne application me alag alag url paths ke liye alag alag response bhejna
// jaise ki agar hum chahte hai ke jab user localhost:3000/home pr jaye to use home page dikhe
// or jab user localhost:3000/about pr jaye to use about page dikhe
// iske liye hum routing ka use krte hai

// ye humare app ko felxible bnata hai or hum apne application me alag alag pages create kr skte hai

// app.get, app.post, app.put, app.delete vagera methods hote hai jo specific http methods ko handle krte hai

//example 

app.get('/' , (req,res) => {
    res.send("This is the root path");
    // '/' is the root path 
    // in  app.use , the response will always be sent to the root path 
    // that is why i have to comment out the above code because if the above code was also executed then 
    // the root path would have recieved 2 response which would trigger error
})

app.get('/home' , (req,res) => {
    res.send("This is Home page");
});

app.get('/about' , (req,res) => {
    res.send("This is About page");
});

app.get('/help' , (req,res) => {
    res.send("This is Help page");
});

// agr kisi aise path pr request aajaye jo exist nhi krta tho aise case ko handle krne ke liye :
// app.get('*', (req,res) => {
//     res.send("This page does not exist");
// }); // we use * to handle all the paths that do not exist
// ye sabse last me hona chaiye q ke ye sabse pehle match ho jayega or iske bad koi bhi path match nhi hoga

// filal ye '*' wala route kuch dikkat kr rha hai q ke js ke new version me get ko shi se nhi samjh pa rha hai
// alternative vhi hai ke app.use kro pr last me 

//ab bat krte hai post request ki 
// post request ka use hum tab krte hai jb hume server pr koi data bhejna hota hai jaise ki form data
// post request ko handle krne ke liye hum app.post method ka use krte hai

//example

app.post('/home', (req,res) => {
    // ab get or post req alag - alag hoti hai isliye ye ek dusre ke sath interfere nhi kenge
    // khi tum ye na bolne lago ke /home ke liye 2 res.send kaise ho gyi
    res.send("This is a post request on home page");
});

// ye thi routing ke choti si baat-cheet

// Nodemon : ek package hai jo humare server ko automatically restart kr deta hai jb bhi hum koi change save krte hai
// isse hum baar baar server ko manually restart nhi krna pdega jb bhi hum koi change krte hai
// ise install krne ke liye npm install -g nodemon // -g se ye globally install ho jata hai




//Parameters in express js


// man lo aap http://instagram.com/apple likh rhe ho 
// fir app likh rhe ho http://instagram.com/google
// fir http://instagram.com/apnacollege
//tho ab itne sare alag alag url ke liye crores of get tho nhi likhi hongi tho aise time pr use hota hai parameter 
// syntax : app.get('./:parameter1/:parameter2', (req,res) => {
//iske andar param se in parameters ko access kr skte hai
//example :
//console.log(req.params); // will print the parameters value in the form of object 
//});

//example

app.get('/:username/:id', (req,res) => {
    console.log(req.params); // will print the parameters value in the form of object
    // req ka jo bhi matter hai vo sb console me print hoga na ke server/browser window pr 
    // res ka sara matter server/browser window pr display hoga
    //req ko res me bhej kr req ki value ko server window pr print kr skte hai jaise niche kia hai 
    res.send(`Hello ${req.params.username}, your id is ${req.params.id}`);
});


// ye jo /ke bad likhte hai hum inhe parameters bolte hain



// Querry Strings in express js


// querry strings ka use hum tab krte hai jb hume url me kuch extra information bhejni hoti hai
// jaise ki agar hum chahte hai ke jab user localhost:3000/search?name=apple pr jaye to use apple search result dikhe
// mtlb /search hume kuch or info bhi bhejni hai jaise name=apple
// iske liye hum querry strings ka use krte hai
// syntax : app.get('/search', (req,res) => {
// req.query se hum querry strings ko access kr skte hai
//example : console.log(req.query); // will print the querry strings in the form of object
// jo bhi extra info hum url me bhejte hai wo req ke query property me ja kr store ho jati hai
//});

//example
 app.get('/search', (req,res) => {
    let { q } = req.query; // q ek object hai 
    if(!q){
        res.send("No querry found");
    }
    else  
    res.send(`<h1>Search result for querry : ${q}</h1>`);
 });


// now to Day-3