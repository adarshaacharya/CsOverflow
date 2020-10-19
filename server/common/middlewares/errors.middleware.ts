import { Request, Response } from 'express';

export const errorHandler = (error: any, _: Request, res: Response) => {
  console.log('Server error', error);
  res.statusCode = error.statusCode;
  res.json({ msg: 'Server error' });
};
