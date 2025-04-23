const Product = require('../model/ProductModel');
const Category = require('../model/CategoryModel');

exports.addProduct = async (req, res) => {
  try {
    let product = new Product({
      product_name: req.body.product_name,
      price: req.body.price,
      description: req.body.description,
      quantity: req.body.quantity,
      image: req.body.image,
      category: req.body.category
    });

    product = await product.save();
    if (!product) {
      return res.status(201).json({ message: "Invalid product data" });
    }
    return res.send(product);
  } catch (err) {
    return res.status(400).json({ message: err.message, detail: "Product not added" });
  }
};

exports.getProduct = async (req, res) => {
  try {
    let product = await Product.find().populate('category', 'category_name');
    if (!product) {
      return res.status(404).json({ error: "No product found" });
    }
    return res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "No product found" });
    } else {
      return res.send(product);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndUpdate(
      req.params.id,
      { product_name: req.body.product_name },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ error: "No product found" });
    } else {
      return res.status(200).json({ product, success: "Product updated" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "No product found" });
    } else {
      return res.status(200).json({ success: "Product deleted" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.getProductByCategoryId= async (req, res) => {
  try {
    let category = await Category.findById( req.params.id );
    if (!category) {
      return res.status(404).json({ message: "Category Not Found" });
    } 
    let product= await Product.find({category:req.params.id}).populate("category","category_name");
    if(!product){
      return res.status(404).json({message:"No product found in Category"});
    }
    res.send(product);
  } catch (err) {
    return res.status(400).json({ error: err.message, detail: "Category Not Found" });
  }
}

exports.deleteProduct = async (req, res) => {
  try {
    let product = await Category.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "Product Not found" });
    } else {
      return res.status(200).json({ success: "Product deleted" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};