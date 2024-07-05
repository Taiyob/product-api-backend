/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderService.createOrder(orderData);

    if (!result) {
      return res.status(404).send({
        success: false,
        message: "Product data not found",
        data: result,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Order created successfully!",
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

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getAllOrder();

    if (!result) {
      return res.status(404).send({
        success: false,
        message: "Order data not found",
        data: result,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Order fetched successfully!",
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

const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    const queryEmail = email as string;
    const result = await OrderService.getOrderByEmail(queryEmail);

    if (!result) {
      return res.status(404).send({
        success: false,
        message: "Order Email do not found",
        data: result,
      });
    }
    return res.status(200).send({
      success: true,
      message: "Order fetched successfully for user email!",
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

export const OrderController = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
};
