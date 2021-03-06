const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        res.send('All Speakers')
    });
    router.get('/:name', (req, res, next) => {
        res.send(`Speake detail page for ${req.params.name}`)
    });
    return router;
};