"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TInventorySchema = exports.TVariantsSchema = exports.TProductSchema = void 0;
const zod_1 = require("zod");
const TVariantsSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string(),
});
exports.TVariantsSchema = TVariantsSchema;
const TInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number().int().positive("Quantity must be a positive integer"),
    inStock: zod_1.z.boolean(),
});
exports.TInventorySchema = TInventorySchema;
const TProductSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name must not be empty"),
    description: zod_1.z.string().min(1, "Description must not be empty"),
    price: zod_1.z.number().positive("Price must be a positive number"),
    category: zod_1.z.string().min(1, "Category must not be empty"),
    tags: zod_1.z.array(zod_1.z.string().min(1, "Tags must not contain empty strings")),
    variants: zod_1.z.array(TVariantsSchema),
    inventory: TInventorySchema,
});
exports.TProductSchema = TProductSchema;
