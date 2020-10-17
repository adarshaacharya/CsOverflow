import { Router } from 'express';
import { usersController } from './users.controller';

export const router: Router = Router();

/**
 * @method POST
 * @params [[UserSaveInterface]]: JSON
 * @route /api/users
 * @acces public
 * @async
 */
router.post('/', usersController.createOne);
