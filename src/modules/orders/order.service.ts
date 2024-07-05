import { Product } from "../products/product.model";
import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const createOrder = async (orderData: TOrder) => {
  const { email, productId, quantity } = orderData;

  const product = await Product.findById(productId);
  console.log(product);
  if (!product) {
    throw new Error("Product not found");
  }

  const price = product.price * quantity;

  const newOrder = new Order({
    email: email,
    productId: product._id,
    price: price,
    quantity: quantity,
  });

  const order = await Order.create(newOrder);

  return order;
};

export const OrderService = {
  createOrder,
};
