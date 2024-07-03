import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const createProductFromDB = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateSingleProductFromDB = async (id: string, payLoad: TProduct) => {
  const result = await Product.findByIdAndUpdate(id, payLoad, { new: true });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ _id: id });
  return result;
};

const searchProductFromDB = async (searchTerm: string) => {
  const searchResult = await Product.find({
    $or: [
      { name: { $regex: searchTerm, $options: "i" } },
      { category: { $regex: searchTerm, $options: "i" } },
      { tags: { $in: [searchTerm] } },
    ],
  });
  return searchResult;
};

export const ProductServices = {
  createProductFromDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
  deleteProductFromDB,
  searchProductFromDB,
};
