const express = require("express");
const router = express.Router();

const Pedido = require("../models/Pedido");

router.post("/", async (req, res) => {

    try {

        const nuevoPedido = await Pedido.create(req.body);

        res.status(201).json({
            mensaje: "Pedido creado correctamente",
            pedido: nuevoPedido
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear pedido",
            error: error.message
        });

    }

});

router.get("/", async (req, res) => {

    try {

        const pedidos = await Pedido.find().populate("cliente");

        res.status(200).json(pedidos);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener pedidos",
            error: error.message
        });

    }

});

module.exports = router;