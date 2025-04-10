import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        subcategory: { type: String, required: true },
        brand: { type: String, required: true },
        stock: { type: Number, required: true },
        rating: { type: Number, required: true },
        reviews: { type: Array, required: true },
        },{
            timestamps: true
        }
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;