const express = require('express');
require("dotenv").config();

APP_PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    res.header(
        "Access-Control-Allow-Origin",
        "Origin, Content-Type, Accept"
    );
    next();
});

app.get('/',(req,res)=>{
    res.json({
        version: "1.0.0",
        description: "App para la Hackaton 09",
        author: "nelhoesp"
    });
});

app.get('/health',(req,res)=>{
    res.json({status:true})
});

app.listen(process.env.PORT || 3000 , async ()=>{
    try {
        //await syncDB();
        console.log("Base de datos sincronizada")
    } catch (error) {
        console.error(error)
    }
    console.log(`Server Ready in port ${process.env.PORT}` )
});