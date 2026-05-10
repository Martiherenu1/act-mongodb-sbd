const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema({

    producto: {
        type: String,
        required: true
    },

    precio: {
        type: Number,
        required: true,
        min: 0
    },

    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    }

});

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = Pedido;