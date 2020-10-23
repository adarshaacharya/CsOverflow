import { Router } from 'express';
import { authJwt } from '../../common/middlewares/auth.middleware';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { postsController } from './posts.controller';
import { createPostDto } from './posts.dtos';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/posts
 * @description : Fetch all posts
 * @acces private
 */
router.get('/', authJwt, postsController.findAll);

/**
 * @method GET
 * @route /api/posts
 * @description : Fetch all posts sorted by maximum interactivity
 * @acces private
 */
// router.get('/top', postsController.findAll);

/**
 * @method GET
 * @route /api/posts/tag/:tagname
 * @description : Fetch all posts of a specific tag
 * @acces private
 */
// router.get('/tag/:tagname', postsController.findAll);

/**
 * @method GET
 * @route /api/posts/:id
 * @description : Fetch a single post
 * @acces private
 */
router.get('/:id', authJwt, postsController.findOneById);

/**
 * @method POST
 * @route /api/posts
 * @description : Create a new post by auth user
 * @acces private
 * @async
 */
router.post('/', [authJwt, createValidator(createPostDto)], postsController.createOne);

/**
 * @method DELETE
 * @route /api/posts/:id
 * @description : Delete a post
 * @acces private
 */
router.delete('/:id', authJwt, postsController.deleteOne);
