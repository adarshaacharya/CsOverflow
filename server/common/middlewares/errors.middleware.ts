import { NextFunction, Request, Response } from 'express';

export const errorHandler = (error: any, _: Request, res: Response, _next: NextFunction) => {
  res.statusCode = error.statusCode;
  res.json(error);
};
