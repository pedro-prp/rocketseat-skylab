const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/ongController')
const incidentController = require('./controllers/incidentController')

routes.post('/ongs', ongController.create );
routes.get('/ongs', ongController.get_all);

routes.post('/incidents', incidentController.create );
routes.get('/incidents', incidentController.get_all );

module.exports = routes;
