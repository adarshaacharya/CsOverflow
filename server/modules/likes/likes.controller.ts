import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { likesService } from './likes.service';
import { validateIdOrThrow } from '../../common/validators';

class LikesController {
  public async likeOne(req: AuthRequest, _res: Response, next: NextFunction): Promise<void> {
    try {
      validateIdOrThrow(+req.params.id);

      await likesService.likeOne({
        postId: +req.params.id,
        userId: req.user!.id,
      });
    //   res.json(comment);
    } catch (error) {
      next(error);
    }
  }
}
export const likesController = new LikesController();
