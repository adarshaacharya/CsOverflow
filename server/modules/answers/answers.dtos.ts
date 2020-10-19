import * as Joi from 'joi';

export const createAnswersDto = Joi.object().keys({
  body: Joi.string().min(1).required(),
});
