import * as Joi from 'joi';

export const createPostDto = Joi.object().keys({
  title: Joi.string().min(4).required(),
  body: Joi.string().min(5).required(),
  tags: Joi.array().required(),
});
