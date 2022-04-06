import mongoose from 'mongoose';

const Processor = mongoose.model('Processor', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  brand: String,
  totalCores: Number,
  totalThreads: Number,
  price: Number,
  weigh: Number,
  image: mongoose.ObjectId,
});

export default Processor;
