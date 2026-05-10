const mongoose = require('mongoose');

const conectarDB = async () => {
    
    try{
        await mongoose.connect("//localhost:27017/act-mongodb-sbd");
        console.log("Mongoose conectado con exito!");
    }catch (error){
        console.log("No se ha podido conectar a mongoose");
        console.log("Error: ", error);
    }

};

module.exports = conectarDB;