import mongoose from 'mongoose';

const User = mongoose.model('User', {
  _id: mongoose.Schema.Types.ObjectId,
  email: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    // required: false,
    default: 'USER',
  },
  isVerified: {
    type: Boolean,
    required: false,
    default: false,
  },
});

export default User;
