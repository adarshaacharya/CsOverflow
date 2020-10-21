import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { answersService } from './answers.service';
import validateIdOrThrow from '../../common/validators/id-validator';

class AnswersController {
  public async createOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.postId);
      const answer = await answersService.createOne({
        body: req.body.body,
        postId: +req.params.postId,
        userId: req.user!.id,
      });

      res.json(answer);
    } catch (error) {
      next(error);
    }
  }
}

export const answersController = new AnswersController();
