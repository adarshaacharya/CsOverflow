import { Router } from 'express';
import { authJwt } from '../../common/middlewares/auth.middleware';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { postsController } from './posts.controller';
import { createPostDto, updatePostDto } from './posts.dtos';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/posts
 * @description : Fetch all posts
 * @acces private
 */
router.get('/', postsController.findAll);

/**
 * @method GET
 * @route /api/posts/top
 * @description : Fetch top posts sorted by maximum interactivity
 * @acces private
 */
router.get('/top', postsController.findTopPosts);

/**
 * @method GET
 * @route /api/posts/tag/:tagname
 * @description : Fetch all posts of a specific tag
 * @acces private
 */
router.get('/tag/:tagname', postsController.findByTag);

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
 * @method PUT
 * @route /api/posts/:id
 * @description : Update a post
 * @acces private
 */
router.put('/:id', [authJwt, createValidator(updatePostDto)], postsController.updateOne);

/**
 * @method DELETE
 * @route /api/posts/:id
 * @description : Delete a post
 * @acces private
 */
router.delete('/:id', authJwt, postsController.deleteOne);
