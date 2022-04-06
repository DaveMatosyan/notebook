import mongoose from 'mongoose';

const Keyboard = mongoose.model('Keyboard', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  isWireless: Boolean,
  color: String,
  price: Number,
  image: mongoose.ObjectId,
});

export default Keyboard;
