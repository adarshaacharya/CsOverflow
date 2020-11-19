import { AuthRequest } from '../../common/types/types';
import { NextFunction, Response } from 'express';
import { Tags } from './tags.model';
import { tagsService } from './tags.service';

class TagsController {
  public async getAll(_: AuthRequest, res: Response, next: NextFunction) {
    try {
      const tags: Tags[] = await tagsService.getAll();
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  }

  public async getTag(req: AuthRequest, res: Response, next: NextFunction) {
    try {
      const tag = await tagsService.getTag(req.params.tagname);
      res.status(200).json(tag);
    } catch (error) {
      next(error);
    }
  }
}

export const tagsController = new TagsController();
