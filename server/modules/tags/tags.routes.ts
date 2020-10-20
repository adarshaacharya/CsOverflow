import { authJwt } from '../../common/middlewares/auth.middleware';
import { Router } from 'express';
import { tagsController } from './tags.controller';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/tags
 * @description : fetch all tags
 * @acces private
 * @async
 */
router.get('/', authJwt, tagsController.getAll);
