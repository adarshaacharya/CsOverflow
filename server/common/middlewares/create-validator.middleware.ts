import { NextFunction, Response } from 'express';
import * as Joi from 'joi';
import BadRequest from '../exceptions/bad-request';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
  req: any,
  _: Response,
  next: NextFunction
) => {
  const { error } = schema.validate(req[key]);
  if (error) {
    throw new BadRequest(error.details[0].message);
  }
  next();
};
