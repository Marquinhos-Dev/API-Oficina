
const Router = require('express').Router();
const {store,index,update,destroy} = require('../controllers/vehicleController.js');

Router.post('/',store);
Router.get('/',index);
Router.put('/:id',update);
Router.delete('/:id',destroy);

module.exports = Router;