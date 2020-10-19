import { Router } from 'express';
import { answersController } from './answers.controller';
import { createAnswersDto } from './answers.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/**
 * @method POST
 * @route /api/answers
 * @description : Answer to posts by auth users
 * @acces private
 * @async
 */
router.post(
  '/:postId',
  [authJwt, createValidator(createAnswersDto)],
  answersController.createOne
);
