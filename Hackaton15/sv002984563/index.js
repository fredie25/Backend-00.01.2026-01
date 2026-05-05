require (`dotenv`).config();
console.log(`Inicio de la aplicacion`);

const app = require(`./app.js`);
const sequelize = require(`./src/config/db.js`);

require(`./src/config/modeldb.js`)

const start = async ()=>{
    try{
        await sequelize.authenticate();
        console.log(`Conectado a DB`);

        await sequelize.sync({alter:true});
        console.log(`Tablas Sincronizadas`);

        const http = require(`http`);
        const server = http.createServer(app);

        const PORT = process.env.PORT;

        server.listen (PORT, ()=>{
            console.log(`Servidor iniciado en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error(`Error de conexion a DB`, error.message);
        process.exit(1);
    }
}

start(); 
