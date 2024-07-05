import express from "express";
import { ProductControllers } from "./product.controller";

const route = express.Router();

//route.get("/", ProductControllers.searchProduct);
route.get("/", ProductControllers.getAllProduct);
route.post("/", ProductControllers.createProduct);
route.get("/:productId", ProductControllers.getSingleProduct);
route.put("/:productId", ProductControllers.updateSingleProduct);
route.delete("/:productId", ProductControllers.deleteProduct);

export const ProductRoute = route;
