import { request, response } from "express";
import Product from "../models/productSchema.js"

export const getProducts = async(request, response) => {
    try {
        const products = await Product.find({})

        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getSingleProduct = async(request, response) => {
    try {
        const id = request.params.id;
        // console.log(id);
        const product = await Product.findOne({ "_id": id })

        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}

export const addProduct = async(request, response) => {
    try {
        const product = request.body;
        const newProduct = new Product(product)
        await newProduct.save();

        response.status(200).json({ message: product });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}