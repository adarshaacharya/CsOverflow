import { Router } from 'express';
import { commentsController } from './comments.controller';
import { createCommentsDto } from './comments.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/posts/comments/:id
 * @description : Fetch all comments of a post
 * @acces private
 */
// router.post('/:id', commentsController.findAll);

/**
 * @method POST
 * @route /api/posts
 * @description : Create a new post by auth user
 * @acces private
 */
router.post('/:id', [authJwt, createValidator(createCommentsDto)], commentsController.createOne);
