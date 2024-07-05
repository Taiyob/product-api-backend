import express, { Request, Response } from "express";
import { ProductRoute } from "./modules/products/product.route";
import { OrderRoute } from "./modules/orders/order.route";

const app = express();
app.use(express.json());

app.use("/api/products", ProductRoute);
app.use("/api/orders", OrderRoute);

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Product backend server for API end-point");
});

export default app;
