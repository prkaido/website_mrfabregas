const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar el producto', error });
    }
});

// Actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Error al actualizar el producto', error });
    }
});

// Eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: 'Producto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }
});

module.exports = router;
