import * as Joi from 'joi';

export const createUsersDto = Joi.object().keys({
    name: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});
