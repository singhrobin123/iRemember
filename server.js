require("dotenv").config();
const express = require("express");
const db = require("./api/config/db");

const apiRouter = require("./api/index.route");
const cors = require('cors');
const path = require('path');


//Initialize the app
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')))

// app.use(express.static(path.join(__dirname, 'build')));
//Setting database connection object on app
app.use(cors());
app.set("db",db);

//Middlewares

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",(req,res,next)=>{next()},apiRouter);
app.get('/*', function (req, res) {
    console.log("Hello req");
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });



const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})






