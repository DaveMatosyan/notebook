// eslint-disable-next-line import/named

import express from 'express';
import { body, param } from 'express-validator';
import {
  getOne, getAll, create, update, remove,
} from './controller.js';
import * as errorMessages from '../../constants/errorMessages.js';
import { expressValidationResult } from '../../utils/middlewares.js';
import { isUserExist } from './costumWalid.js';

const router = express.Router();

router.get('/', getAll);

router.get(
  '/:id',
  param('id', errorMessages.isntConsist).custom(isUserExist),
  getOne,
);

router.post(
  '/',
  body('count', errorMessages.intErrorGenerator(0, 10000)).isInt({ min: 0 }, { max: 10000 }),
  // body('user', errorMessages.wrongUser).custom(isUserExist),
  expressValidationResult,
  create,
);

router.patch(
  '/:id',
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
