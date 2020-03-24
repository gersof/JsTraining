const { Router } = require('express');
const controllers = require('../controllers/employees-controller');

const employeeRouter = Router();

employeeRouter.get('/employees', controllers.getAllEmployees);

employeeRouter.post('/employees', controllers.createEmployee);

employeeRouter.put('/employees/:id', controllers.updateEmployee);

employeeRouter.delete('/employees/:id', controllers.deleteEmployee);


module.exports = employeeRouter;