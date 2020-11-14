import { authJwt } from '../../common/middlewares/auth.middleware';
import { Router } from 'express';
import { tagsController } from './tags.controller';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/tags
 * @description : fetch all tags
 * @acces private
 */
router.get('/', authJwt, tagsController.getAll);

/**
 * @method POST
 * @route /api/tags/:tagname
 * @description : fetch a single tag
 * @acces private
 */
router.get('/:tagname', authJwt, tagsController.getTag);
