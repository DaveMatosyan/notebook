import mongoose from 'mongoose';
import Display from '../../../models/display.js';

const selectForFront = ['name', 'brand', 'inch', 'color', 'price'];

export async function getOneService(id) {
  const product = await Display.findById(id).select(selectForFront);
  return product;
}
export async function getAllService() {
  const products = await Display.find().select(selectForFront);
  return products;
}

export async function createService(body) {
  const existProductName = await Display.findOne({ name: body.name });
  const existProductPrice = await Display.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const display = new Display({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await display.save();
  // eslint-disable-next-line max-len
  const res = await Display.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const product = await Display.updateOne({ _id: id }, body);
  return product;
}

export async function removeService(id) {
  const product = await getOneService(id);
  await product.remove({ _id: id });
  return product;
}
