import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { postsService } from './posts.service';
import { validateIdOrThrow } from '../../common/validators';
import { Tags } from '../../modules/tags/tags.model';

class PostsController {
  public async findAll(_req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const posts = await postsService.findAll();
      res.status(201).json(posts);
    } catch (error) {
      next(error);
    }
  }

  public async findOneById(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      validateIdOrThrow(+req.params.id);
      const post = await postsService.findOneByIdOrThrow(+req.params.id);
      res.status(201).json(post);
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

      await Tags.create({
        tagname: 'programming',
      });

      res.status(201).json(post);
    } catch (error) {
      next(error);
    }
  }

  public async deleteOne(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      validateIdOrThrow(+req.params.id);
      const postId = +req.params.id;
      const userId = validateIdOrThrow(req.user!.id);
      await postsService.deleteOne(postId, userId);
      res.status(201).json({ msg: 'Post has been deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}

export const postsController = new PostsController();
