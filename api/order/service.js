import mongoose from 'mongoose';
// import Op from '../../models/product.js';
import Order from '../../models/order.js';

export async function getOneService(id, userId) {
  const product = await Order
    .find({ userId }, { _id: id });

  return product;
}
export async function getAllService(userId) {
  const orders = await Order.find({ userId });
  return orders;
}

export async function createService(body, userId) {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    ...body,
    userId,
  });
  await order.save();
  return order;
}

export async function updateService(body, id, userId) {
  const geted = await getOneService();
  if (geted) {
    const product = await Order.updateOne({ _id: id, userId }, body);
    return product;
  }
  return Promise.reject();
}

export async function removeService(id, userId) {
  const geted = await getOneService();
  if (geted) {
    const products = await Order.remove({ _id: id, userId });
    return products;
  }
  return Promise.reject();
}
