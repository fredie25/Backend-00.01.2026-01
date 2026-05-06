const db = require('../models');
const User = db.user;


exports.allAccess = (req,res)=>{
    res.status(200).send("Contenido Publico")
}

exports.onlyUsers = async (req,res)=>{
    const user  = await User.findById(req.userId);
    if(!user) return res.status(404).send(`usuario no encontrado`);
    res.status(200).send(`Contenido exclusivo para ti ${user.username}`);
}

exports.onlyModerators = (req,res)=>{
    res.status(200).send(`Contenido exclusivo para moderadores`);
}

exports.onlyAdmins = (req,res)=>{
    res.status(200).send(`Contenido exclusivo para administradores`);
}