import mongoose from 'mongoose';
import Laptop from '../../models/laptop.js';

const selectForFront = ['name', 'price', 'weigh', 'componyName', 'productType', 'foodType'];

export async function getOneService(id) {
  const laptop = await Laptop.findById(id).select(selectForFront);
  return laptop;
}
export async function getAllService() {
  const laptop = await Laptop.find().select(selectForFront);
  return laptop;
}

export async function createService(body) {
  const existProductName = await Laptop.findOne({ name: body.name });
  const existProductPrice = await Laptop.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const laptop = new Laptop({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await laptop.save();
  const res = await Laptop.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const laptop = await Laptop.updateOne({ _id: id }, body);
  return laptop;
}

export async function removeService(id) {
  const laptop = await getOneService(id);
  await laptop.remove({ _id: id });
  return laptop;
}
