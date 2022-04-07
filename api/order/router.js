// eslint-disable-next-line import/named

import express from 'express';
import { body, param } from 'express-validator';
import {
  getOne, getAll, create, update, remove,
} from './controller.js';
import * as errorMessages from '../../constants/errorMessages.js';
import { expressValidationResult } from '../../utils/middlewares.js';
import * as customValidator from './costumWalid.js';

const router = express.Router();

router.get('/', getAll);

router.get(
  '/:id',
  param('id', errorMessages.isntConsist).custom(customValidator.isOrderExist),
  getOne,
);

router.post(
  '/',
  body('count', errorMessages.intErrorGenerator(0, 10000)).optional().isInt({ min: 0 }, { max: 10000 }),
  body('display', errorMessages.isntConsist).optional().custom(customValidator.isRamExist),
  body('keyboard', errorMessages.isntConsist).optional().custom(customValidator.isKeyboardExist),
  body('mouse', errorMessages.isntConsist).optional().custom(customValidator.isMouseExist),
  body('ram', errorMessages.isntConsist).optional().custom(customValidator.isRamExist),
  body('laptop', errorMessages.isntConsist).optional().custom(customValidator.isLaptopExist),
  body('pc', errorMessages.isntConsist).optional().custom(customValidator.isPcExist),
  expressValidationResult,
  create,
);

router.patch(
  '/:id',
  body('count', errorMessages.intErrorGenerator(0, 10000)).optional().isInt({ min: 0 }, { max: 10000 }),
  body('display', errorMessages.isntConsist).optional().custom(customValidator.isRamExist),
  body('keyboard', errorMessages.isntConsist).optional().custom(customValidator.isKeyboardExist),
  body('mouse', errorMessages.isntConsist).optional().custom(customValidator.isMouseExist),
  body('ram', errorMessages.isntConsist).optional().custom(customValidator.isRamExist),
  body('laptop', errorMessages.isntConsist).optional().custom(customValidator.isLaptopExist),
  body('pc', errorMessages.isntConsist).optional().custom(customValidator.isPcExist),
  expressValidationResult,
  update,
);

router.delete(
  '/:id',
  // param('id', errorMessages.isntConsist).custom(indexCostumValidatr),
  expressValidationResult,
  remove,
);
export default router;
