const Category = require('../model/CategoryModel');

exports.addCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ category_name: req.body.category_name });
    if (!category) {
      let categoryadd = new Category({
        category_name: req.body.category_name,
      });
      categoryadd = await categoryadd.save();
      return res.send(categoryadd);
    } else {
      return res.status(201).json({ error: "Category already exists" });
    }
  } catch (err) {
    return res.status(400).json({ error: err.message, detail: "Category not added" });
  }
};

exports.getCategory = async (req, res) => {
  let category = await Category.find()//returns array
  if (!category) {
      res.status(404).json({ error: "No category found" })
  }
  res.send(category)
};

exports.getCategoryById = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "No category found" });
    } else {
      return res.send(category);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    let category = await Category.findByIdAndUpdate(
      req.params.id,
      { category_name: req.body.category_name },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ error: "No category found" });
    } else {
      return res.status(200).json({ category, success: "Category updated" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    let category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "No category found" });
    } else {
      return res.status(200).json({ success: "Category deleted" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

