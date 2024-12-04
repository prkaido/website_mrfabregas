const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

// Crear un nuevo pedido
router.post('/', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear el pedido', error });
    }
});

// Obtener todos los pedidos
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('products.product');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos', error });
    }
});

// Eliminar un pedido
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findByIdAndDelete(id);
        res.status(200).json({ message: 'Pedido eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
    }
});

module.exports = router;
