import mongoose from 'mongoose';
// import Op from '../../models/product.js';
import Order from '../../models/order.js';

export async function getOneService(id) {
  const product = await Order
    .findById(id)
    .select('count')
    .populate(
      'laptop',
      ['name', 'price', 'weigh', 'componyName', 'productType', 'foodType'],
    );

  return product;
}
export async function getAllService() {
  const orders = await Order.find();
  // .select('count')
  // .populate(
  //   'product',
  //   ['name', 'price', 'weigh', 'componyName', 'productType', 'foodType'],
  // );
  console.log(orders);
  return orders;
}

export async function createService(body) {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await order.save();
  // updateServiceUser(order._id, {});
  // const result = await Order;+
  // .select('count')
  // .populate(
  //   'laptop',
  //   ['name', 'price', 'weigh', 'componyName', 'productType', 'foodType'],
  // );
  return order;
}

export async function updateService(body, id) {
  const products = await Order.updateOne({ _id: id }, body);
  return products;
}

export async function removeService(id) {
  const products = await Order.remove({ _id: id });
  return products;
}
