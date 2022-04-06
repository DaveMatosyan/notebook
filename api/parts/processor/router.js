// eslint-disable-next-line import/named

import express from 'express';
import { body, param } from 'express-validator';
import {
  getOne, getAll, create, update, remove,
} from './controller.js';
import * as errorMessages from '../../../constants/errorMessages.js';
import { expressValidationResult } from '../../../utils/middlewares.js';
import { indexCostumValidatr } from './costumWalid.js';

const router = express.Router();

router.get('/', getAll);

router.get(
  '/:id',
  param('id', errorMessages.prodError).custom(indexCostumValidatr),
  getOne,
);

router.post(
  '/',
  body('name', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('brand', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('totalCores', errorMessages.intErrorGenerator(1, 10000)).isInt({ min: 1 }, { max: 10000 }),
  body('totalThreads', errorMessages.intErrorGenerator).isInt({ min: 1 }, { max: 10000 }),
  body('generation', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('price', errorMessages.intErrorGenerator(1, 10000)).isInt({ min: 0 }, { max: 10000 }),
  expressValidationResult,
  create,
);

router.patch(
  '/:id',
  body('name', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('brand', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('totalCores', errorMessages.intErrorGenerator(1, 10000)).isInt({ min: 1 }, { max: 10000 }),
  body('totalThreads', errorMessages.intErrorGenerator).isInt({ min: 1 }, { max: 10000 }),
  body('generation', errorMessages.strngLengtErrorGenerator(4, 255)).isLength({ min: 4 }, { max: 255 }),
  body('price', errorMessages.intErrorGenerator(1, 10000)).isInt({ min: 0 }, { max: 10000 }),
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
