import { getOneService } from './service.js';

export function nameCostomValid(val) {
  if (val[0] < 'A' || val[0] > 'Z') {
    return Promise.reject();
  }
  return true;
}

export async function indexCostumValidatr(val) {
  const product = await getOneService(val);
  if (!product) {
    return Promise.reject();
  }
  return true;
}

export function isDdr(val) {
  if (val === 'ddr3' || val === 'ddr4' || val === 'ddr5') {
    return true;
  }
  return Promise.reject();
}

export async function isCountPositiveNumber(val) {
  if (val.count <= 0) {
    return Promise.reject();
  }
  return true;
}
