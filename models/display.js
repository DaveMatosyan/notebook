import mongoose from 'mongoose';

const Display = mongoose.model('Display', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  inch: mongoose.Schema.Types.Decimal128,
  color: String,
  price: Number,
  image: mongoose.ObjectId,
});

export default Display;
