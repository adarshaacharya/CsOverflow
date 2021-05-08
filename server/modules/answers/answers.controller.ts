import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { answersService } from './answers.service';
import validateIdOrThrow from '../../common/validators/id-validator';

class AnswersController {
  public async createOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);
      const answer = await answersService.createOne({
        body: req.body.body,
        postId: +req.params.id,
        userId: req.user!.id,
      });

      res.status(201).json(answer);
    } catch (error) {
      next(error);
    }
  }

  public async findAnswersByPostId(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      validateIdOrThrow(+req.params.id);

      const postId = +req.params.id;
      const answers = await answersService.findAnswersByPostId(postId);
      console.log(answers);
      res.status(201).json(answers);
    } catch (error) {
      next(error);
    }
  }
}

export const answersController = new AnswersController();
