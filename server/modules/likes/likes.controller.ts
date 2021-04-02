import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { likesService } from './likes.service';
import { validateIdOrThrow } from '../../common/validators';

class LikesController {
  public async getLikesById(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);
      const postId = +req.params.id;
      const likes = await likesService.getLikesById(postId);
      res.json(likes);
    } catch (error) {
      next(error);
    }
  }

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

      const disliked = await likesService.dislikeOne({
        postId: +req.params.id,
        userId: req.user!.id,
      });
      res.json(disliked);
    } catch (error) {
      next(error);
    }
  }
}
export const likesController = new LikesController();
