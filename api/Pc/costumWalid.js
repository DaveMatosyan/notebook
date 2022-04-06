import { getOneService } from './service.js';

export function nameCostomValid(val) {
  if (val[0] < 'A' || val[0] > 'Z') {
    return Promise.reject();
  }
  return true;
}

export async function indexCostumValidatr(val) {
  const pc = await getOneService(val);
  // console.log(pc);
  if (!pc) {
    return Promise.reject();
  }
  return true;
}

export async function isCountPositiveNumber(val) {
  if (val.count <= 0) {
    return Promise.reject();
  }
  return true;
}
