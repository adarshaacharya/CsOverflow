import * as Joi from 'joi';
import { Response, NextFunction } from 'express';

export const createValidator = (schema: Joi.Schema, key: string = 'body') => (
    req: any,
    res: Response,
    next: NextFunction
) => {
    const { error } = Joi.valid(req[key], schema);
    if (error) {
        res.status(400).json({ msg: error });
    }
    next();
};
