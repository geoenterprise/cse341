const routes = require('express').Router();
// const lesson1Controller = require('../controllers/lesson1');

// routes.get('/', lesson1Controller.geoRoute);
// routes.get('/anaCriollo', lesson1Controller.anaRoute);

routes.use('/contacts', require('./contacts'));

module.exports = routes;