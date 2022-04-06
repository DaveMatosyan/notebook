import express from 'express';
import multer from 'multer';
import { param } from 'express-validator';
import { expressValidationResult } from '../../utils/middlewares.js';
import * as controller from './controller.js';
import * as errorMessages from '../../constants/errorMessages.js';
import * as validator from './costumWalid.js';

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './uploads');
  },
  filename(req, file, cb) {
    const data = new Date();
    const name = data.getTime() + file.originalname;
    cb(null, name.replace(/ /g, ''));
  },
});
const upload = multer({ storage });

const router = express.Router();

router.get('/', controller.getAll);

router.post(
  '/one',
  upload.single('img'),
  expressValidationResult,
  controller.createOne,
);

// router.post(
//   '/many',
//   upload.single('avatar'),
//   expressValidationResult,
//   controller.createMany,
// );

router.delete(
  '/:id',
  param('id', errorMessages.notFound).custom(validator.isExists),
  expressValidationResult,
  controller.remove,
);
export default router;
