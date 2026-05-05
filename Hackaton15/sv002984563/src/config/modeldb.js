const { DataTypes } = require(`sequelize`);
const sequelize = require(`./db`);

const Paquete = sequelize.define("Paquete",{
    remitente: { type: DataTypes.STRING, allowNull:false},
    destinatario: { type: DataTypes.STRING, allowNull:false},
    descripcion: { type: DataTypes.STRING, allowNull:false},
    entregado: { type: DataTypes.BOOLEAN, defaultValue:false},
    fecha: { type:DataTypes.DATE , allowNull:false, defaultValue:DataTypes.NOW},
}, {tableName: `paquetes`});

const Ubicacion = sequelize.define("Ubicacion",{
    ubicacion_actual: { type: DataTypes.STRING, allowNull: false},
}, {tableName: `ubicaciones`});

const Usuario = sequelize.define("Usuario", {
    nombre: { type: DataTypes.STRING, allowNull:false}
}, {tableName: `usuarios`});

const Mensaje = sequelize.define(`Mensaje`, {
    mensaje: { type: DataTypes.STRING, allowNull:false},
    fecha:  { type: DataTypes.DATE , allowNull:false, defaultValue:DataTypes.NOW}
}, {tableName:`mensajes`});

Paquete.hasMany(Ubicacion);
Paquete.belongsTo(Usuario);

Ubicacion.belongsTo(Paquete);

Usuario.hasMany(Paquete);
Usuario.hasMany(Mensaje);

Mensaje.belongsTo(Usuario);

module.exports = {sequelize, Paquete, Ubicacion, Usuario, Mensaje}