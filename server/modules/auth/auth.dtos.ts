import * as Joi from 'joi';

export const loginDto: any = Joi.object().keys({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const updatePasswordDto: any = Joi.object().keys({
  oldPassword: Joi.string().min(6),
  newPassword: Joi.string().min(6).required(),
});
