import mongoose from 'mongoose';
import Pc from '../../models/pc.js';

const selectForFront = ['name', 'price', 'brand', 'ram', 'display', 'processor'];

export async function getOneService(id) {
  const pc = await Pc.findById(id).select(selectForFront);
  return pc;
}
export async function getAllService() {
  const pc = await Pc.find().select(selectForFront);
  return pc;
}

export async function createService(body) {
  const existProductName = await Pc.findOne({ name: body.name });
  const existProductPrice = await Pc.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const pc = new Pc({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await pc.save();
  const res = await Pc.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const pc = await Pc.updateOne({ _id: id }, body);
  return pc;
}

export async function removeService(id) {
  const pc = await getOneService(id);
  await pc.remove({ _id: id });
  return pc;
}
