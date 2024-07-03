import { Request, Response } from "express";
import { TProductSchema } from "./product.validation";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const { product } = req.body;

    const validatedData = TProductSchema.parse(product);

    const result = await ProductServices.createProductFromDB(validatedData);

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

const updateSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product } = req.body;

    const validatedData = TProductSchema.parse(product);

    const result = await ProductServices.updateSingleProductFromDB(
      productId,
      validatedData
    );

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

const searchProduct = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const queryString = searchTerm as string;

    const result = await ProductServices.searchProductFromDB(queryString);

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
  } catch (error: any) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
      error: error.errors ?? error.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteProduct,
  searchProduct,
};
