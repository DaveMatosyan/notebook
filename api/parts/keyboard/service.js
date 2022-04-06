import mongoose from 'mongoose';
import Keyboard from '../../../models/keyboard.js';

const selectForFront = ['name', 'brand', 'isWireless', 'color', 'price', 'image'];

export async function getOneService(id) {
  const product = await Keyboard.findById(id).select(selectForFront);
  return product;
}
export async function getAllService() {
  const products = await Keyboard.find().select(selectForFront);
  return products;
}

export async function createService(body) {
  const existProductName = await Keyboard.findOne({ name: body.name });
  const existProductPrice = await Keyboard.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const keyboard = new Keyboard({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await keyboard.save();
  // eslint-disable-next-line max-len
  const res = await Keyboard.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const product = await Keyboard.updateOne({ _id: id }, body);
  return product;
}

export async function removeService(id) {
  const product = await getOneService(id);
  await product.remove({ _id: id });
  return product;
}
