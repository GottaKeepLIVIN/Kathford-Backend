const mongoose = require('mongoose');
const CategoryModel = require('./CategoryModel');

const ProductSchema = new mongoose.Schema({
    product_name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    description: { type: String },
    quantity: { type: Number },
    image: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema);