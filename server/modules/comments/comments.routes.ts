import { Router } from 'express';
import { commentsController } from './comments.controller';
import { createCommentDto } from './comments.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/posts
 * @description : Create a new post by auth user
 * @acces private
 * @async
 */
router.post(
  '/:postId',
  [authJwt, createValidator(createCommentDto)],
  commentsController.createOne
);
