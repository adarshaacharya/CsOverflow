import { loginDto } from './auth.dtos';
import { Router } from 'express';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authController } from './auth.controller';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/auth/login
 * @description : User login to app
 * @acces public
 * @async
 */
router.post('/login', createValidator(loginDto), authController.login);
