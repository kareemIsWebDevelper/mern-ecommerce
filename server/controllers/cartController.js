const Cart = require("../models/cart.model");

// Add Product To Cart
const addToCart = async (req, res) => {
  const productId = req.body.productId;
  try {
    const newCartProduct = await Cart.create({
      product: productId,
    });

    res.status(201).json(newCartProduct);
  } catch (err) {
    res.status(500).json({ msg: err.message });
    console.log(err);
  }
};

// Get All Cart Products
const getCartProducts = async (req, res) => {
  try {
    const cartProducts = await Cart.find().populate("product");
    res.status(200).json(cartProducts);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Remove Product From Cart
const RemoveFromCart = async (req, res) => {
  const { id } = req.params;
  try {
     const deletedCart = await Cart.findOneAndDelete({ product: id });
    if (deletedCart) {
      res.status(200).json({ msg: "Product removed successfully" });
    } else {
      res.status(404).json({ msg: "Cart document not found" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  addToCart,
  getCartProducts,
  RemoveFromCart,
};
