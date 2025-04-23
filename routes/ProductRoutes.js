const express = require('express');

const {  addProduct, getProductById, getProductByCategoryId,getProduct, deleteProduct} = require('../controller/ProductController');
const router = express.Router();

router.post('/addproduct', addProduct);
router.get('/get', getProduct);
router.get('/:id', getProductById);


// router.get("/",getProducts);
// router.get('/categoryget/:id', getcategory);
// router.get('/category/:id', getCategoryById);
// router.put('/category/:id', updateCategory);
// router.delete('/category/:id', deleteCategory); // Ensure deleteCategory is correctly imported and defined
router.get("/category/:id", getProductByCategoryId);
router.delete("/deleteproduct/:id", deleteProduct);

module.exports = router;