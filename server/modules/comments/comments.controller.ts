import { Response } from 'express';
import { Comments } from './comments.model';

class CommentsController {
  public async createOne(req, res: Response): Promise<void> {
    try {
      const { body } = req.body;

      const comment: Comments = new Comments({
        body,
        postId: req.params.postId,
        userId: req.user.id,
      });
      await comment.save();

      res.json(comment);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}
export const commentsController = new CommentsController();
