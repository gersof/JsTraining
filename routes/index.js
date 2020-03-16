const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/products', controllers.getAllProducts);

router.post('/products', controllers.createProduct);

router.put('/products/:id', controllers.updateProduct);

router.delete('/products/:id', controllers.deleteProduct);


module.exports = router;