import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    image:String,
    title:Object,
    price:Number,
    quantity:Number,
    desc:String,
   
});

const Product = mongoose.model("products" , productSchema)

export default Product;