const express = require("express");
const conectarDB = require("./config/db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

conectarDB();

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});