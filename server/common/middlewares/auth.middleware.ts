import { X_AUTH_TOKEN } from '../../common/constants';
import { NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { Unauthorized } from '../../common/exceptions';

export const authJwt = (req, _res, next: NextFunction) => {
  const token = req.header(X_AUTH_TOKEN);

  if (!token) throw new Unauthorized('No token, authorization denied');

  try {
    const decoded = <any>jwt.verify(token, process.env.JWT_SECRET as string);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error('something wrong with auth middleware');
    throw new Unauthorized('Token not valid');
  }
};
