import { NextFunction, Response } from 'express';
import * as Joi from 'joi';
// import { BadRequest } from '../exceptions/';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
    req: any,
    res: Response,
    next: NextFunction
) => {
    const { error } = schema.validate(req[key]);
    if (error) {
        // throw new BadRequest(error.details[0].message);
        res.status(400).json({ msg: error.details[0].message });
        return;
    }
    next();
};
