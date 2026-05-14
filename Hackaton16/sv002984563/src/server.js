require (`dotenv`).config();
console.log(`Inicio de aplicacion`);

const http = require(`http`);
const path = require(`path`);

const app = require(`./app`);
const server = http.createServer(app);
const io = require(`socket.io`)(server);

const bodyParser = require(`body-parser`);
const passtport = require(`passport`);

const bcryptjs = require(`bcryptjs`);

const session = require(`express-session`);
const db = require(`./config/db`);

const PORT = process.env.PORT;

server.listen(PORT, ()=>{
    console.log(`Escuchando el puerto ${PORT}`);
})



