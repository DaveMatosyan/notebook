import mongoose from 'mongoose';

const Mouse = mongoose.model('Mouse', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  isWireless: Boolean,
  color: String,
  price: Number,
  image: mongoose.ObjectId,
});

export default Mouse;
