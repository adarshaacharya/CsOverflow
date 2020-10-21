import { AuthRequest } from '../../common/types/types';
import { Response } from 'express';
import { commentsService } from './comments.service';
import { validateIdOrThrow } from '../../common/validators';

class CommentsController {
  public async createOne(req: AuthRequest, res: Response): Promise<void> {
    try {
      validateIdOrThrow(+req.params.postId);
      const comment = commentsService.createOne({
        body: req.body.body,
        postId: +req.params.postId,
        userId: req.user!.id,
      });
      res.json(comment);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}
export const commentsController = new CommentsController();
