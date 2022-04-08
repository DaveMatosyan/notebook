/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable import/prefer-default-export */
import { validationResult } from 'express-validator';

export function expressValidationResult(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  return next();
}

export function roleChecker(rout, method) {
  return function (req, res, next) {
    const { role } = req.user;
    if (role === 'USER' && method === 'ORDER') {
      return next();
    }
    if (role === 'USER' && rout !== 'GET') {
      // console.log('sssssss');
      return res.status(409).json({ massage: 'access denied' });
    }
    if (role !== 'SUPERADMIN' && method === 'USER') {
      return res.status(409).json({ massage: 'access denied' });
    }
    return next();
  };
}
