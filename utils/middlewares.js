/* eslint-disable import/prefer-default-export */
import { validationResult } from 'express-validator';

export function expressValidationResult(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return next();
}
