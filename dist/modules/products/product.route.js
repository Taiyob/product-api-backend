"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const route = express_1.default.Router();
route.post("/", product_controller_1.ProductControllers.createProduct);
route.get("/:productId", product_controller_1.ProductControllers.getSingleProduct);
route.put("/:productId", product_controller_1.ProductControllers.updateSingleProduct);
route.delete("/:productId", product_controller_1.ProductControllers.deleteProduct);
route.get("/", product_controller_1.ProductControllers.getAllProduct);
route.get("/", product_controller_1.ProductControllers.searchProduct);
exports.ProductRoute = route;
