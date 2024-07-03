"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_validation_1 = require("./product.validation");
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { product } = req.body;
        const validatedData = product_validation_1.TProductSchema.parse(product);
        const result = yield product_service_1.ProductServices.createProductFromDB(validatedData);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const result = yield product_service_1.ProductServices.getAllProductsFromDB();
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
const getSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getSingleProductFromDB(productId);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
const updateSingleProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { productId } = req.params;
        const { product } = req.body;
        const validatedData = product_validation_1.TProductSchema.parse(product);
        const result = yield product_service_1.ProductServices.updateSingleProductFromDB(productId, validatedData);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductFromDB(productId);
        if (!result || result.deletedCount === 0) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { searchTerm } = req.query;
        const queryString = searchTerm;
        const result = yield product_service_1.ProductServices.searchProductFromDB(queryString);
        if (!result || result.length === 0) {
            return res.status(404).send({
                success: false,
                message: "Product data not found",
                data: result,
            });
        }
        return res.status(200).send({
            success: true,
            message: "Product found successfully!",
            data: result,
        });
    }
    catch (error) {
        return res.status(500).send({
            success: false,
            message: "Internal server error",
            error: (_a = error.errors) !== null && _a !== void 0 ? _a : error.message,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateSingleProduct,
    deleteProduct,
    searchProduct,
};
