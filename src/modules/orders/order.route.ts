import express from "express";
import { OrderController } from "./order.controller";

const route = express.Router();

route.get("/", OrderController.getOrderByEmail);
route.post("/", OrderController.createOrder);
route.get("/", OrderController.getAllOrder);

export const OrderRoute = route;
