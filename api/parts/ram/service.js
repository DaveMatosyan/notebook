import mongoose from 'mongoose';
import Ram from '../../../models/ram.js';

const selectForFront = ['name', 'brand', 'color', 'memorySpeed', 'memorySize', 'generation', 'price', 'image'];

export async function getOneService(id) {
  const product = await Ram.findById(id).select(selectForFront);
  return product;
}
export async function getAllService() {
  const products = await Ram.find().select(selectForFront);
  return products;
}

export async function createService(body) {
  const existProductName = await Ram.findOne({ name: body.name });
  const existProductPrice = await Ram.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const ram = new Ram({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await ram.save();
  // eslint-disable-next-line max-len
  const res = await Ram.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const product = await Ram.updateOne({ _id: id }, body);
  return product;
}

export async function removeService(id) {
  const product = await getOneService(id);
  await product.remove({ _id: id });
  return product;
}
