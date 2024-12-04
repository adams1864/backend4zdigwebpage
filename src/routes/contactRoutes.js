// src/routes/contactRoutes.js

const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Contact page');
});

module.exports = router;
