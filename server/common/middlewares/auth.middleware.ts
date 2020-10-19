import { NextFunction, Response } from 'express';
import * as jwt from 'jsonwebtoken';
// import { AuthRequest } from '../../common/types/types';


export const authJwt = (
  req,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-auth-token');

  if (!token) {
    res.status(401).json({ msg: 'No token, authorization denied' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Token not valid' });
  }
};
