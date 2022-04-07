import mongoose from 'mongoose';

const Order = mongoose.model('Order', {
  _id: mongoose.Schema.Types.ObjectId,
  laptop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Laptop',
    required: false,
  },
  pc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pc',
    required: false,
  },
  mouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mouse',
    required: false,
  },
  keyboard: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Keyboard',
    required: false,
  },
  display: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Display',
    required: false,
  },
  ram: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ram',
    required: false,
  },
  count: {
    type: Number,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
});

export default Order;
