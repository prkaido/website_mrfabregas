const express = require('express');
const Reservation = require('../models/Reservation');

const router = express.Router();

// Crear una nueva reserva
router.post('/', async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(400).json({ message: 'Error al crear la reserva', error });
    }
});

// Obtener todas las reservas
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las reservas', error });
    }
});

// Eliminar una reserva
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.status(200).json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la reserva', error });
    }
});

module.exports = router;
