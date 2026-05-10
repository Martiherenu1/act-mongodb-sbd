const express = require("express");
const router = express.Router();

const Cliente = require("../models/Cliente");

router.post("/", async (req, res) => {

    try {

        const nuevoCliente = await Cliente.create(req.body);

        res.status(201).json({
            mensaje: "Cliente creado correctamente",
            cliente: nuevoCliente
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al crear cliente",
            error: error.message
        });

    }

});

router.get("/", async (req, res) => {

    try {

        const clientes = await Cliente.find();

        res.status(200).json(clientes);

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al obtener clientes",
            error: error.message
        });

    }

});

router.put("/:id", async (req, res) => {

    try {

        const clienteActualizado = await Cliente.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            mensaje: "Cliente actualizado correctamente",
            cliente: clienteActualizado
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al actualizar cliente",
            error: error.message
        });

    }

});

router.delete("/:id", async (req, res) => {

    try {

        await Cliente.findByIdAndDelete(req.params.id);

        res.status(200).json({
            mensaje: "Cliente eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({
            mensaje: "Error al eliminar cliente",
            error: error.message
        });

    }

});

module.exports = router;