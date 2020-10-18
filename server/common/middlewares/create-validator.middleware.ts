import * as Joi from 'joi';
import { Response, NextFunction } from 'express';
import BadRequest from '../exceptions/bad-request';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
    req: any,
    _: Response,
    next: NextFunction
) => {
    const { error } = Joi.valid(req[key], schema);
    if (error) {
        throw new BadRequest(error);
    }
    next();
};
