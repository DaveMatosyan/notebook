import { getOneByEmailService } from '../user/service.js';

// eslint-disable-next-line import/prefer-default-export
export async function isExistEmail(email) {
  const user = getOneByEmailService(email);
  if (!user) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject(401);
  }
  return true;
}

export async function ifExistEmail(email) {
  const user = await getOneByEmailService(email);
  if (user) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject();
  }
  return true;
}
