require('dotenv').config();

const express = require('express');
const path = require('path');


const app = express();
const server  = require('http').Server(app);
const io = require('socket.io')(server);

const bodyParser = require('body-parser');
const passport = require('passport');

const bcryptjs = require('bcryptjs');

const session = require('express-session');

const con  = require('./database/db');

const PORT = process.env.PORT || 3000;
const SECRET = process.env.SECRET;

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session(
    {
        secret: SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:{
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000
        }
    }
));
app.use(passport.initialize());
app.use(passport.session());


server.listen(PORT,()=>console.log(`Servidor iniciado en el puerto ${PORT}`));