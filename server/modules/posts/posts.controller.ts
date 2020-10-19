import { Request, Response } from 'express';
import { Posts } from './posts.model';

class PostsController {
  public async createOne(req: Request, res: Response): Promise<void> {
    try {
      const { title, body, userId } = req.body;

      const post: Posts = await Posts.create({
        title,
        body,
        userId,
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
