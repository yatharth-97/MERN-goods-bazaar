const router = require('express').Router();
const Product = require('../models/productModel');
const authMiddleware = require('../middleware/authMiddleware');

// add a new product
router.post('/add-product', authMiddleware, async (req, res) => {
  try {
    const newProduct = Product(req.body);
    await newProduct.save();
    res.send({
      success: true,
      message: 'Product added Successfully',
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
});
