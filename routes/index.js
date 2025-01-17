const routes = require('express').Router();
const contacts = require('./contacts');

// const lesson1Controller = require('../controllers/lesson1');

// routes.get('/', lesson1Controller.geoRoute);
// routes.get('/anaCriollo', lesson1Controller.anaRoute);

routes.use('/', require('./swagger'));
routes.use('/contacts', contacts);
routes.get('/', (req, res) => {
  res.send('Welcome to my Contacts API');
});

module.exports = routes;
