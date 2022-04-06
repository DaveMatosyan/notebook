import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../../models/user.js';
import { mailSender } from '../../utils/mailer.js';

const userSelections = ['email', 'fname', 'lname', 'age', 'role', 'isVerified', 'password'];

const hashPassword = async (password, saltRounds = 10) => {
  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash password
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log(error);
  }

  // Return null if error
  return null;
};

export async function getAllService() {
  const users = await User
    .find()
    .select(userSelections);
  return users;
}

export async function getOneService(id) {
  const user = await User
    .findById(id)
    .select(userSelections);

  // const user = await User.findOne({ _id: id });
  // if (user) throw new Error('User exists');
  return user;
}

export async function getOneByEmailService(email) {
  const user = await User
    .findOne({ email })
    .select(userSelections);

  // const user = await User.findOne({ _id: id });
  // if (user) throw new Error('User exists');
  return user;
}

export async function getOneByRoleService(role) {
  const user = await User
    .findOne({ role })
    .select(userSelections);

  // const user = await User.findOne({ _id: id });
  // if (user) throw new Error('User exists');
  return user;
}
export async function createService(body) {
  const existEmail = await User.findOne({ email: body.email });
  if (existEmail) {
    throw Error('user alredy exist');
  }
  const { password, ...restBody } = body;

  const hashedPassword = await hashPassword(password);

  const user = new User({
    _id: mongoose.Types.ObjectId(),
    ...restBody,
    password: hashedPassword,
  });

  // console.log(user);
  await user.save();

  mailSender(body.email);

  return user;
}

export async function updateService(id, body) {
  const user = await User
    .findByIdAndUpdate({ _id: id }, body, { new: true })
    .select(userSelections);
  return user;
}

export async function removeService(id) {
  const user = await User
    .findOneAndRemove({ _id: id })
    .select(userSelections);
  return user;
}
