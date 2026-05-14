const path = require(`path`);
const bodyParser = require("body-parser");
const express = require(`express`);
const passport = require("passport");
const session = require(`express-session`);

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));  

const SECRET = process.env.SECRET;

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session(
    {
        secret: SECRET,
        resave:false,
        saveUninitialized:false,
        cookie:{
            secure:process.env.NODE_ENV === `production`,
            maxAge:24 * 60 * 60 * 1000
        }
    }
));
app.use(passport.initialize());
app.use(passport.session());


module.exports = app;