// eslint-disable-next-line import/named
import express from 'express';
import { body } from 'express-validator';
import {
  confirm, forgetPassword, recoverPassword, reEmail, signIn, signUp,
} from './controller.js';
import { ifExistEmail, isExistEmail } from './costumWalid.js';
import * as errorMessages from '../../constants/errorMessages.js';
import { expressValidationResult } from '../../utils/middlewares.js';

const router = express.Router();

router.post(
  '/signin',
  body('email', errorMessages.wrongEmail).isEmail(),
  body('email', errorMessages.isntConsist).custom(isExistEmail),
  body('password', errorMessages.strngLengtErrorGenerator(0, 1000)).isLength({ max: 1000 }),
  expressValidationResult,
  signIn,
);

router.post(
  '/signup',
  body('email', errorMessages.wrongEmail).isEmail(),
  body('email', errorMessages.alreadyConsist).custom(ifExistEmail),
  body('password', errorMessages.strngLengtErrorGenerator(0, 1000)).isLength({ max: 1000 }),
  expressValidationResult,
  signUp,
);

router.post(
  '/forget-password',
  body('email', errorMessages.wrongEmail).isEmail(),
  body('email', errorMessages.isntConsist).custom(isExistEmail),
  expressValidationResult,
  forgetPassword,
);

router.post(
  '/recover-password',
  body('token', errorMessages.jwtError).isJWT(),
  body('password', errorMessages.isntConsist).custom(isExistEmail),
  expressValidationResult,
  recoverPassword,
);

router.post(
  '/confirm',
  body('token', errorMessages.jwtError).isJWT(),
  expressValidationResult,
  confirm,
);

router.post(
  '/remail',
  body('email', errorMessages.wrongEmail).isEmail(),
  body('email', errorMessages.isntConsist).custom(isExistEmail),
  expressValidationResult,
  reEmail,
);

export default router;
