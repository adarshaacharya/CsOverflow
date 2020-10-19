import { Router } from 'express';
import { authJwt } from '../../common/middlewares/auth.middleware';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { postsController } from './posts.controller';
import { createPostDto } from './posts.dtos';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/posts
 * @description : Create a new post by auth user
 * @acces private
 * @async
 */
router.post(
  '/',
  [authJwt, createValidator(createPostDto)],
  postsController.createOne
);
