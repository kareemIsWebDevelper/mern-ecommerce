const express = require('express');
const router = express.Router();
const { 
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct 
} = require('../controllers/productController');

router.post('/', createProduct);

router.get('/', getProducts);

router.get('/:id', getProduct);

router.patch('/:id', updateProduct);

router.delete('/:id', deleteProduct);


module.exports = router