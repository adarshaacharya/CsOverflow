import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { commentsService } from './comments.service';
import { validateIdOrThrow } from '../../common/validators';

class CommentsController {
  public async createOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.postId);
      const comment = await commentsService.createOne({
        body: req.body.body,
        postId: +req.params.postId,
        userId: req.user!.id,
      });
      res.json(comment);
    } catch (error) {
      next(error);
    }
  }
}
export const commentsController = new CommentsController();
