const { Router } = require('express');
const controllers = require('../controllers/products-controller');

const productRouter = Router();

productRouter.get('/products', controllers.getAllProducts);

productRouter.post('/products', controllers.createProduct);

productRouter.put('/products/:id', controllers.updateProduct);

productRouter.delete('/products/:id', controllers.deleteProduct);


module.exports = productRouter;