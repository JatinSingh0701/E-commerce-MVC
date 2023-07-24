const productController = require('../controllers/product.controller');
const router = require('express').Router();


// Get request for products
router.get('/products', productController.getProducts);
router.get('/product/:id', productController.getProduct); 
router.get('/add-product', productController.getAddProduct);
router.get('/edit-product/:id', productController.getEditProduct);

// post request for products 
router.post('/add-product', productController.postAddProduct);
router.post('/edit-product/:id', productController.postEditProduct);



module.exports = router;
