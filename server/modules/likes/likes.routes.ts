import { Router } from 'express';
import { likesController } from './likes.controller';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/posts/like/:id
 * @description : Like likes on a post
 * @acces private
 */
router.get('/like/:id', [authJwt], likesController.getLikesById);

/**
 * @method POST
 * @route /api/posts/like/:id
 * @description : Like a post
 * @acces private
 */
router.post('/like/:id', [authJwt], likesController.likeOne);

/**
 * @method DELETE
 * @route /api/posts/dislike/:id
 * @description : dislike a post
 * @acces private
 */
router.post('/dislike/:id', [authJwt], likesController.dislikeOne);
