const express = require('express');
const { addCategory, getCategory, getCategoryById, updateCategory, deleteCategory } = require('../controller/CategoryController');
const router = express.Router();

router.post('/categoryadd', addCategory);
router.get('/', getCategory);
router.get('/:id', getCategoryById);
router.put('/updateCategory/:id', updateCategory);
router.delete('/deletecategory/:id', deleteCategory); // Ensure deleteCategory is correctly imported and defined

module.exports = router;