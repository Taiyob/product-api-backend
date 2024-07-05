import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// const createOrder1 = async (orderData: TOrder) => {
//   const { email, productId, quantity } = orderData;

//   const product = await Product.findById(productId);

//   if (!product) {
//     throw new Error("Product not found");
//   }

//   const price = product.price * quantity;
//   const newOrder = new Order({
//     email: email,
//     productId: product._id,
//     price: price,
//     quantity: quantity,
//   });

//   const quantityCount = product.inventory.quantity - quantity;
//   product.inventory.quantity = quantityCount;
//   await product.save();

//   const order = await Order.create(newOrder);

//   return order;
// };

const createOrder = async (orderData: TOrder) => {
  const session = await Product.startSession();

  const { email, productId, quantity } = orderData;

  const product = await Product.findById(productId);

  if (!product) {
    throw new Error("Product not found");
  }
  try {
    session.startTransaction();

    const price = product.price * quantity;
    const newOrder = new Order({
      email: email,
      productId: product._id,
      price: price,
      quantity: quantity,
    });

    const quantityCount = product.inventory.quantity - quantity;
    product.inventory.quantity = quantityCount;
    const updatedProduct = await product.save();

    const order = await Order.create([newOrder], { session });

    await session.commitTransaction();

    return { updatedProduct, order };
  } catch (error) {
    await session.abortTransaction();

    throw error;
  } finally {
    session.endSession();
  }
};

const getAllOrder = async () => {
  const result = await Order.find();

  return result;
};

const getOrderByEmail = async (email: string) => {
  const order = await Order.find({
    $or: [{ email: { $regex: email, $options: "i" } }],
  });

  return order;
};

export const OrderService = {
  createOrder,
  getAllOrder,
  getOrderByEmail,
};
