import mongoose from 'mongoose';

const Pc = mongoose.model('Pc', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  weigh: Number,
  isGaming: String,
  color: String,
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
  image: mongoose.ObjectId,
});

export default Pc;
