const Product = require('../models/product.model');

// Create a new Product
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create({
          name: req.body.name,
          category: req.body.categoryId,
          description: req.body.description,
          quantity: req.body.quantity,
          price: req.body.price,
          discount: req.body.discount,
          colors: req.body.colors,
          image: req.body.image
        });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get all products
const getProducts = async (req, res) => {
    try {
      const products = 
      await Product.find()
      .populate("category"); // Populate only the _id field of the category
      
      res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get Single Product
const getProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

// Update Product
const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);
        res.status(201).json({message: "Product deleted successfully"});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
}

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct
};