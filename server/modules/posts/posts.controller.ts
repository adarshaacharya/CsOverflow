import { Response } from 'express';
// import { Users } from '../../modules/users/users.model';
import { Posts } from './posts.model';

class PostsController {
  public async createOne(req, res: Response): Promise<void> {
    try {

      const { title, body } = req.body;

      const post: Posts = new Posts({
        title,
        body,
        userId: req.user.id, // from token
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
