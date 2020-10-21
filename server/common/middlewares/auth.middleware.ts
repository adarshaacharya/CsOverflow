import { NextFunction } from 'express';
const jwt = require('jsonwebtoken');
import { Unauthorized } from '../../common/exceptions';

export const authJwt = (req, _res, next: NextFunction) => {
  const token = req.header('x-auth-token');

  if (!token) throw new Unauthorized('No token, authorization denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    throw new Unauthorized('Token not valid');
  }
};
