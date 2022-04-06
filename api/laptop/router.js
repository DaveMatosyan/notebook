// eslint-disable-next-line import/named

import express from 'express';
import { body, param } from 'express-validator';
import {
  getOne, getAll, create, update, remove,
} from './controller.js';
import * as errorMessages from '../../constants/errorMessages.js';
import { expressValidationResult } from '../../utils/middlewares.js';
import { nameCostomValid, indexCostumValidatr } from './costumWalid.js';

const router = express.Router();

router.get('/', getAll);

router.get(
  '/:id',
  param('id', errorMessages.prodError).custom(indexCostumValidatr),
  getOne,
);

router.post(
  '/',
  body('weigh', errorMessages.intErrorGenerator(0, 1000000)).isInt({ min: 0 }, { max: 1000000 }),
  body('price', errorMessages.intErrorGenerator(0, 2000000)).isInt({ min: 0 }, { max: 2000000 }),
  body('brand', errorMessages.firstLetterIsntUpperCase).custom(nameCostomValid),
  body('brand', errorMessages.nameOnlyLaters).isAlpha(),
  body('color', errorMessages.wrongColor).isHexColor(),
  expressValidationResult,
  create,
);

router.patch(
  '/:id',
  param('id', errorMessages.isntConsist).custom(indexCostumValidatr),
  body('weigh', errorMessages.intErrorGenerator()).optional().isInt({ min: 0 }, { max: 1000000 }),
  body('price', errorMessages.intErrorGenerator(0, 1000000)).isInt({ min: 0 }, { max: 1000000 }),
  body('brand', errorMessages.firstLetterIsntUpperCase).optional().custom(nameCostomValid),
  body('brand', errorMessages.fieldOnlyLaters).optional().isAlpha(),
  body('color', errorMessages.wrongColor).optional().isHexColor(),
  expressValidationResult,
  update,
);

router.delete(
  '/:id',
  param('id', errorMessages.isntConsist).custom(indexCostumValidatr),
  expressValidationResult,
  remove,
);
export default router;
