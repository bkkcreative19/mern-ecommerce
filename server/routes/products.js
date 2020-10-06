import express from "express";

import { getProductbyId, getProducts } from "../controllers/products.js";

const router = express.Router();

router.get("/products", getProducts);
router.get("/products/:id", getProductbyId);

export default router;
