import mongoose from 'mongoose';
import Mouse from '../../../models/mouse.js';

const selectForFront = ['name', 'brand', 'isWireless', 'color', 'price'];

export async function getOneService(id) {
  const product = await Mouse.findById(id).select(selectForFront);
  return product;
}
export async function getAllService() {
  const products = await Mouse.find().select(selectForFront);
  return products;
}

export async function createService(body) {
  const existProductName = await Mouse.findOne({ name: body.name });
  const existProductPrice = await Mouse.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const mouse = new Mouse({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await mouse.save();
  // eslint-disable-next-line max-len
  const res = await Mouse.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const product = await Mouse.updateOne({ _id: id }, body);
  return product;
}

export async function removeService(id) {
  const product = await getOneService(id);
  await product.remove({ _id: id });
  return product;
}
