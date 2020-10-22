import { Router } from 'express';
import { commentsController } from './comments.controller';
import { createCommentsDto } from './comments.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/posts/comments/:id
 * @description : Fetch all comments of a post
 * @acces private
 */
// router.get('/:id', commentsController.findAll);

/**
 * @method POST
 * @route /api/posts/comments/:id
 * @description : Create a new post by auth user
 * @acces private
 */
router.post('/:id', [authJwt, createValidator(createCommentsDto)], commentsController.createOne);

/**
 * @method DELETE
 * @route /api/posts/comments/:id
 * @description : Delete a comment to a post
 * @acces private
 */
// router.get('/:id', commentsController.deleteOne);
