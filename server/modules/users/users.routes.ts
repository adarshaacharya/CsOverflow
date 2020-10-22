import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { Router } from 'express';
import { usersController } from './users.controller';
import { createUsersDto } from './users.dtos';

export const router: Router = Router();

/**
 * @method GET
 * @route /api/users
 * @description fetch all users
 * @acces private
 */
router.get('/', usersController.findAll)

/**
 * @method GET
 * @route /api/users/:id
 * @description fetch single user
 * @acces private
 */
// router.get('/:id', usersController.findById)

/**
 * @method POST
 * @route /api/users
 * @description register a new user
 * @acces public
 */
router.post('/', createValidator(createUsersDto), usersController.createOne);
