const Category = require("../models/category.model");

// Create New Category
const createCategory = async (req, res) => {
  const { name, description, image } = req.body;

  const newCategory = await Category.create({ name, description, image });

  try {
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get All Categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Single Category
const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id);
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update Category
const updateCategory = async (req, res) => {
  const { id } = req.params;

  const updatedData = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Category
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete(id, { delete: true });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
};
