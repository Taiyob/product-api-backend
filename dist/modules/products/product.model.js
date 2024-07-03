"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: { type: String, required: [true, "Give the proper type"] },
    value: { type: String, required: [true, "Give the value"] },
});
const inventorySchema = new mongoose_1.Schema({
    quantity: { type: Number, required: [true, "Quantity field is required"] },
    inStock: { type: Boolean, required: true },
});
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: [true, "Name field is required"] },
    description: {
        type: String,
        required: [true, "Description field is required"],
    },
    price: { type: Number, required: [true, "Price field is required"] },
    category: { type: String, required: [true, "Category field is required"] },
    tags: [{ type: String, required: [true, "Category field is required"] }],
    variants: [variantsSchema],
    inventory: inventorySchema,
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
