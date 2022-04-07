import express from 'express';
import { body, param } from 'express-validator';
import { expressValidationResult } from '../../utils/middlewares.js';
import * as errorMessages from '../../constants/errorMessages.js';
import {
  getAll, getOne, remove, update,
} from './controller.js';
import { getValidator, isFirstLetterUpperCase, isUserDeclareded } from './customWalid.js';

const router = express.Router();

router.get('/', getAll);

router.get(
  '/:id',
  param('id')
    .custom(getValidator),
  expressValidationResult,
  getOne,

);

router.delete(
  '/:id',
  param('id').custom(getValidator),
  expressValidationResult,
  remove,
);

router.patch(
  '/:id',
  param('id').optional().custom(getValidator),
  body('email', errorMessages.isntConsist).optional().custom(isUserDeclareded),
  body('fname', errorMessages.strngLengtErrorGenerator(4, 255)).optional().isLength({ min: 4 }, { max: 255 }),
  body('fname', errorMessages.nameOnlyLaters).optional().isAlpha(),
  body('lname', errorMessages.strngLengtErrorGenerator(4, 255)).optional().isLength({ min: 4 }, { max: 255 }),
  body('lname', errorMessages.firstLetterIsntUpperCase).optional().custom(isFirstLetterUpperCase),
  body('lname', errorMessages.nameOnlyLaters).optional().isAlpha(),
  body('age', errorMessages.intErrorGenerator(0, 100)).optional().isInt({ min: 0, max: 100 }),
  body('_id', 'can not update id').optional().custom(() => Promise.reject()),
  expressValidationResult,
  update,
);

export default router;
