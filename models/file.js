import mongoose from 'mongoose';

const File = mongoose.model('File', {
  _id: mongoose.Schema.Types.ObjectId,
  fileName: String,
});

export default File;
