import { getOneService } from './service.js';
import { getOneService as getOneServiceDisplay } from '../parts/display/service.js';
import { getOneService as getOneServiceKeyboard } from '../parts/keyboard/service.js';
import { getOneService as getOneServiceMouse } from '../parts/mouse/service.js';
import { getOneService as getOneServiceProcessor } from '../parts/processor/service.js';
import { getOneService as getOneServiceRam } from '../parts/ram/service.js';
import { getOneService as getOneServiceLaptop } from '../laptop/service.js';
import { getOneService as getOneServicePc } from '../pc/service.js';

export function nameCostomValid(val) {
  if (val[0] < 'A' || val[0] > 'Z') {
    return Promise.reject();
  }
  return true;
}

export async function indexCostumValidatr(val) {
  const order = await getOneService(val);
  if (!order) {
    return Promise.reject();
  }
  return true;
}

export async function isOrderExist(val) {
  const user = await getOneService(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isDisplayExist(val) {
  const user = await getOneServiceDisplay(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isKeyboardExist(val) {
  const user = await getOneServiceKeyboard(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isMouseExist(val) {
  const user = await getOneServiceMouse(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isProcessorExist(val) {
  const user = await getOneServiceProcessor(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isRamExist(val) {
  const user = await getOneServiceRam(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isLaptopExist(val) {
  const user = await getOneServiceLaptop(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}

export async function isPcExist(val) {
  const user = await getOneServicePc(val);
  if (!user) {
    return Promise.reject();
  }
  return true;
}
