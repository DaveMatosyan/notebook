/* eslint-disable prefer-promise-reject-errors */
// import mongoose from 'mongoose';
import { sign } from '../../utils/jwt generate.js';
import { passwordVerify } from '../../utils/helper.js';

// eslint-disable-next-line import/prefer-default-export
export async function signInService(user, password) {
  if (!user) {
    return Promise.reject(401);
  }
  if (!user.isVerified) {
    return Promise.reject(401);
  }
  const check = await passwordVerify(password, user.password);
  if (!check) {
    return Promise.reject(401);
  }
  const token = await sign({ id: user._id, role: user.role });
  return token;
}
