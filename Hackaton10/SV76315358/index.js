require("dotenv").config();
const express = require('express');
const PORT=process.env.PORT || 3000;
const {tiendaRouter} = require('./router/router')
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send({message: "online"})
})

app.use('/tienda', tiendaRouter);

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})