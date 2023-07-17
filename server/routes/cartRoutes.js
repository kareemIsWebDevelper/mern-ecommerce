const express = require("express");
const {
  addToCart,
  getCartProducts,
  RemoveFromCart,
} = require("../controllers/cartController");
const router = express.Router();

router.post("/", addToCart);

router.get("/", getCartProducts);

router.delete("/:id", RemoveFromCart);

module.exports = router;
