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

router.put("/:id", async (req, res) => {

    try {

        const pedidoActualizado = await Pedido.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            mensaje: "Pedido actualizado correctamente",
            pedido: pedidoActualizado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar pedido",
            error: error.message
        });

    }

});

router.delete("/:id", async (req, res) => {

    try {

        await Pedido.findByIdAndDelete(req.params.id);

        res.status(200).json({
            mensaje: "Pedido eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar pedido",
            error: error.message
        });

    }

});

module.exports = router;