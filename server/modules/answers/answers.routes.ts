import { Router } from 'express';
import { answersController } from './answers.controller';
import { createAnswersDto } from './answers.dtos';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { authJwt } from '../../common/middlewares/auth.middleware';

export const router: Router = Router();

/** @method GET
 * @route  /api/posts/answers/:postId
 *  @desc : fetch all answers of a post
 *  @access Private
 */
// router.get('/:postId', answersController.fetchAll);

/**
 * @method POST
 * @route /api/posts/answers/:postId
 * @description : Answer to posts by auth users
 * @acces private
 */
router.post('/:postId', [authJwt, createValidator(createAnswersDto)], answersController.createOne);


/**
 * @method DELETE
 * @route /api/posts/answers/:postId
 * @description : delete an answer to the post
 * @acces private
 */
// router.delete('/:postId', answersController.deleteOne);
