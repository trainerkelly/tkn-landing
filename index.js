// server 
import express from "express"; 
import bodyParser from "body-parser";
import ejs from "ejs";
import { fileURLToPath } from 'url'; // got help from ChatGPT
import path, { dirname } from "path"; // got help from ChatGPT

// database 
import pg from "pg";

// authentication and sessions 
import session from "express-session";

// hidden files 
import env from "dotenv";

// Directory from Current Moduleç
const __dirname = dirname(fileURLToPath(import.meta.url)); // got help from ChatGPT

// initalization and configuration 
const app = express();
const port = 3010; 
env.config();

// middleware
app.use((req, res, next) => {
    console.log("Request method: ", req.method);  // example middleware function: logging the request method. \ req.url ALSO works 
    next(); 
  });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
})
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// static files 
app.use('/static', express.static(path.join(__dirname, 'public')));

// GET Requests
app.get('/', (req, res) => {
    // replace with the template files, etc. when uploading the full site
    // res.sendFile(path.join(__dirname, '/index.html'));  // got help from ChatGPT 
    res.render("index.ejs");
    console.log('Index page successfully loaded!')
});

app.get('/index', (req, res) => {
    res.redirect("/");
});

app.get('/privacy-policy', (req, res) => { 
    res.render("privacy-policy.ejs");
    console.log('Index page successfully loaded!')
});


// app.get('/test', (req, res) => {
//     // replace with the template files, etc. when uploading the full site
//     res.send("This is a test page!");
// }); // got help from ChatGPT 


// port listening 
app.listen(port, () => {
    console.log(`Listening in on Port ${port}`);
}
   ); 