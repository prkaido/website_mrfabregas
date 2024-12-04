
const express = require('express');
const User = require('../models/User');

const router = express.Router();

// User registration
router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

// User login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) return res.status(400).send('Invalid email or password');
        req.session.user = user;
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
    