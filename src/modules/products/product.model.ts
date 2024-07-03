import { Schema, model } from "mongoose";
import { TInventory, TProduct, TVariants } from "./product.interface";

const variantsSchema = new Schema<TVariants>({
  type: { type: String, required: [true, "Give the proper type"] },
  value: { type: String, required: [true, "Give the value"] },
});

const inventorySchema = new Schema<TInventory>({
  quantity: { type: Number, required: [true, "Quantity field is required"] },
  inStock: { type: Boolean, required: true },
});

const productSchema = new Schema<TProduct>({
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

export const Product = model<TProduct>("Product", productSchema);
