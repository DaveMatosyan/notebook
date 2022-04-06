import mongoose from 'mongoose';
import File from '../../models/file.js';

export async function getOneService(id) {
  const geted = await File
    .findById(id);
  return geted;
}

export async function getAllService() {
  const geted = await File.find();
  return geted;
}
export async function createOneService(body) {
  const created = new File({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await created.save();
  return created;
}

export async function removeService(id) {
  const removed = await File.remove({ _id: id });
  return removed;
}
