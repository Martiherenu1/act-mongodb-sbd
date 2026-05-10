const express = require("express");
const conectarDB = require("./config/db");

const pedidosRoutes = require("./routes/pedidos.routes");
const clientesRoutes = require("./routes/clientes.routes");

const app = express();

app.use(express.json());

conectarDB();

app.use("/clientes", clientesRoutes);
app.use("/pedidos", pedidosRoutes);

app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});