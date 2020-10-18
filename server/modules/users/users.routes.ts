import { createValidator } from '../../common/middlewares/create-validator';
import { Router } from 'express';
import { usersController } from './users.controller';
import { createUsersDto } from './users.dtos';

export const router: Router = Router();

/**
 * @method POST
 * @params [[UserSaveInterface]]: JSON
 * @route /api/users
 * @acces public
 * @async
 */
router.post('/', createValidator(createUsersDto), usersController.createOne);
