import { z } from "zod";

const TVariantsSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const TInventorySchema = z.object({
  quantity: z.number().int().positive("Quantity must be a positive integer"),
  inStock: z.boolean(),
});

const TProductSchema = z.object({
  name: z.string().min(1, "Name must not be empty"),
  description: z.string().min(1, "Description must not be empty"),
  price: z.number().positive("Price must be a positive number"),
  category: z.string().min(1, "Category must not be empty"),
  tags: z.array(z.string().min(1, "Tags must not contain empty strings")),
  variants: z.array(TVariantsSchema),
  inventory: TInventorySchema,
});

export { TProductSchema, TVariantsSchema, TInventorySchema };
