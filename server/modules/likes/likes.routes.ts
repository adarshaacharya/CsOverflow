import { Router } from 'express';
import { likesController } from './likes.controller';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/posts/like/:id
 * @description : Like a post
 * @acces private
 */
router.post('/like/:id', [authJwt], likesController.likeOne);

/**
 * @method DELETE
 * @route /api/posts/unlike/:id
 * @description : Unlike a post
 * @acces private
 */
router.post('/unlike/:id', [authJwt], likesController.unlikeOne);
