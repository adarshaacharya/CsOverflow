import * as Joi from 'joi';

export const createCommentsDto = Joi.object().keys({
  body: Joi.string().min(3).required(),
});
