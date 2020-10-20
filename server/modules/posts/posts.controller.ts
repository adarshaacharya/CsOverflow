import { AuthRequest } from '../../common/types/types';
import { Response } from 'express';
import { Posts } from './posts.model';

class PostsController {
  public async createOne(req : AuthRequest, res: Response): Promise<void> {
    try {
      const { title, body } = req.body;

      const post: Posts = new Posts({
        title,
        body,
        userId: req.user!.id, // from token
      });
      await post.save();
      res.status(201).json(post);
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}

export const postsController = new PostsController();
