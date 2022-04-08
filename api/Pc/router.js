// eslint-disable-next-line import/named

import express from 'express';
import { body, param } from 'express-validator';
import {
  getOne, getAll, create, update, remove,
} from './controller.js';
import * as errorMessages from '../../constants/errorMessages.js';
import { expressValidationResult, roleChecker } from '../../utils/middlewares.js';
import { indexCostumValidatr } from './costumWalid.js';

const router = express.Router();

const rout = 'PC';

router.get('/', roleChecker(rout, 'GET'), getAll);

router.get(
  '/:id',
  roleChecker(rout, 'GET'),
  param('id', errorMessages.prodError).custom(indexCostumValidatr),
  getOne,
);

router.post(
  '/',
  roleChecker(rout, 'POST'),
  body('weigh', errorMessages.intErrorGenerator(0, 1000000)).isInt({ min: 0 }, { max: 1000000 }),
  body('price', errorMessages.intErrorGenerator(0, 2000000)).isInt({ min: 0 }, { max: 2000000 }),
  body('isGaming', errorMessages.strngLengtErrorGenerator).isAlpha(),
  body('brand', errorMessages.fieldOnlyLaters).isAlpha(),
  body('color', errorMessages.wrongColor).isHexColor(),
  expressValidationResult,
  create,
);

router.patch(
  '/:id',
  roleChecker(rout, 'PATCH'),
  param('id', errorMessages.isntConsist).custom(indexCostumValidatr),
  body('weigh', errorMessages.intErrorGenerator()).optional().isInt({ min: 0 }, { max: 1000000 }),
  body('price', errorMessages.intErrorGenerator(0, 1000000)).isInt({ min: 0 }, { max: 1000000 }),
  body('isGaming', errorMessages.fieldOnlyLaters).optional().isAlpha(),
  body('color', errorMessages.wrongColor).optional().isHexColor(),
  expressValidationResult,
  update,
);

router.delete(
  '/:id',
  roleChecker(rout, 'DELETE'),
  param('id', errorMessages.isntConsist).custom(indexCostumValidatr),
  expressValidationResult,
  remove,
);
export default router;
