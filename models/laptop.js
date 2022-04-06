import mongoose from 'mongoose';

const Laptop = mongoose.model('Laptop', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  weigh: Number,
  brand: String,
  color: String,
});

export default Laptop;
