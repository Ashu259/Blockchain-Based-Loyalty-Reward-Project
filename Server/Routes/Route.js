
import express from "express";

import { userLogin, userSignUp } from "../controllers/userController.js";
import { addProduct, getProducts, getSingleProduct } from "../controllers/productController.js";

const router = express.Router();

router.post("/signup" , userSignUp);

router.post("/login" , userLogin);

router.get("/products" , getProducts);

router.get("/product/:id" , getSingleProduct);

router.post("/create", addProduct);

export default router;