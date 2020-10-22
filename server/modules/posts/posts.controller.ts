import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { postsService } from './posts.service';

class PostsController {
  public async findAll(_req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.findAll();
      res.status(201).json(posts);
    } catch (error) {
      next(error);
    }
  }

  public async findOneById(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }

  public async createOne(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const { title, body } = req.body;
      const post = await postsService.createOne({
        title,
        body,
        userId: req.user!.id, // from token
      });
      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }
}

export const postsController = new PostsController();
