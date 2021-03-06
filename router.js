const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description assgin Task
 *  @method GET /assgin Task Action Part
 */
route.get('/add-user', services.add_user)   

/**
 *  @description Edit assgin Task
 *  @method GET / edit/ updateassgin Task
 */
route.get('/update-user', services.update_user)


// API  
route.post('/api/users', controller.create);  
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route;
