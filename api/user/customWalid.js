import { getOneService, getOneByEmailService } from './service.js';

export async function getValidator(value) {
  const geted = await getOneService(value);
  if (!geted) {
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('user not found');
  }
  return true;
}

export function isFirstLetterUpperCase(val) {
  if (val[0] === val[0].toUpperCase()) {
    return true;
  }
  return false;
}

export async function isUserDeclareded(email) {
  const user = await getOneByEmailService(email);
  if (!user) {
    return Promise.reject();
  }
  return true;
}
