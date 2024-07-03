import express from "express";
import { ProductControllers } from "./product.controller";

const route = express.Router();

route.post("/", ProductControllers.createProduct);
route.get("/:productId", ProductControllers.getSingleProduct);
route.put("/:productId", ProductControllers.updateSingleProduct);
route.delete("/:productId", ProductControllers.deleteProduct);
route.get("/", ProductControllers.getAllProduct);
route.get("/", ProductControllers.searchProduct);

export const ProductRoute = route;
