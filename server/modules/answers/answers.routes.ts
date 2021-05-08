import { Router } from 'express';
import { answersController } from './answers.controller';
import { createAnswersDto } from './answers.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/** @method GET
 * @route  /api/posts/answers/:id
 *  @desc : fetch all answers of a post
 *  @access Private
 */
router.get('/:id', answersController.findAnswersByPostId);

/**
 * @method POST
 * @route /api/posts/answers/:id
 * @description : Answer to posts by auth users
 * @acces private
 */
router.post('/:id', [authJwt, createValidator(createAnswersDto)], answersController.createOne);

/**
 * @method DELETE
 * @route /api/posts/answers/:id
 * @description : delete an answer to the post
 * @acces private
 */
// router.delete('/:id', answersController.deleteOne);
