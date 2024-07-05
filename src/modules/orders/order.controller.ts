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

export const OrderController = {
  createOrder,
};
