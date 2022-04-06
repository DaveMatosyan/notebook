import mongoose from 'mongoose';

const Ram = mongoose.model('Ram', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  memorySpeed: Number,
  memorySize: Number,
  generation: String,
  price: Number,
  image: mongoose.ObjectId,
});

export default Ram;
