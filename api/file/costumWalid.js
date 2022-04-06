import { getOneService } from './service.js';

// eslint-disable-next-line import/prefer-default-export
export async function isExists(value) {
  const geted = await getOneService(value);
  if (!geted) {
    return Promise.reject();
  }
  return true;
}
