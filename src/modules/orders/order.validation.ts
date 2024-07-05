import { object, string, number } from "zod";

export const TOrderSchema = object({
  email: string().email("Invalid email format").min(1),
  productId: string(),
  price: number()
    .positive("Price must be positive")
    .min(0.01, "Price must be at least 0.01"),
  quantity: number()
    .int("Quantity must be an integer")
    .min(1, "Quantity must be at least 1"),
});
