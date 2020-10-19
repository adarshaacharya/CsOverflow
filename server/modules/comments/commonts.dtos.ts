import * as Joi from 'joi';

export const createCommentDto = Joi.object().keys({
  body: Joi.string().min(3).required(),
  postId: Joi.number().required(),
  userId: Joi.number().required(),
});
