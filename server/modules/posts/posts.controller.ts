import { NextFunction, Request, Response } from 'express';
import { Users } from '../../modules/users/users.model';
import { Posts } from './posts.model';

class PostsController {
  public async createOne(req: Request, res: Response, next : NextFunction): Promise<void> {
    try {
      const { title, body, userId } = req.body;

      const post: Posts = await Posts.create({
        title,
        body,
        userId,
      });

      const user = await Users.findByPk(userId);
      if (!user) {
        res.status(400).json({ msg: 'User not found' });
        return;
      }

      await post.save();
      res.status(201).json(post);
    } catch (error) {
      next()
    }
  }
}

export const postsController = new PostsController();
