import AsyncHandler from "express-async-handler";
import Product from "../models/product.js";

// Get all Products
const getProducts = AsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// Get one product
const getProductbyId = AsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductbyId };
