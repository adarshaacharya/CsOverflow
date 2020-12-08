import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { likesService } from './likes.service';
import { validateIdOrThrow } from '../../common/validators';

class LikesController {
  public async likeOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);

      const like = await likesService.likeOne({
        postId: +req.params.id,
        userId: req.user!.id,
      });
      res.json(like);
    } catch (error) {
      next(error);
    }
  }

  public async dislikeOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);

      await likesService.dislikeOne({
        postId: +req.params.id,
        userId: req.user!.id,
      });
      res.json({
        message: 'You unliked this post',
      });
    } catch (error) {
      next(error);
    }
  }
}
export const likesController = new LikesController();
