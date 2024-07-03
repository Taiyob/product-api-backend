import express, { Request, Response } from "express";
import { ProductRoute } from "./modules/products/product.route";

const app = express();
app.use(express.json());

app.use("/api/products", ProductRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Product backend server for API end-point");
});

export default app;
