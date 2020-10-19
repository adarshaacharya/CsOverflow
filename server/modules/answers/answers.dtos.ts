import * as Joi from 'joi';

export const createAnswerDtos = Joi.object().keys({
  body: Joi.string().min(1).required(),
});
