import mongoose from 'mongoose';
import Processor from '../../../models/processor.js';

const selectForFront = ['name', 'brand', 'totalCores', 'totalThreads', 'generation', 'price'];

export async function getOneService(id) {
  const product = await Processor.findById(id).select(selectForFront);
  return product;
}
export async function getAllService() {
  const products = await Processor.find().select(selectForFront);
  return products;
}

export async function createService(body) {
  const existProductName = await Processor.findOne({ name: body.name });
  const existProductPrice = await Processor.findOne({ price: body.price });
  if (existProductName && existProductPrice) { throw new Error('product alredy exist'); }
  const processor = new Processor({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });

  await processor.save();
  // eslint-disable-next-line max-len
  const res = await Processor.findOne({ name: body.name, price: body.price }).select(selectForFront);
  return res;
}

export async function updateService(body, id) {
  const product = await Processor.updateOne({ _id: id }, body);
  return product;
}

export async function removeService(id) {
  const product = await getOneService(id);
  await product.remove({ _id: id });
  return product;
}
