import { AuthRequest } from '../../common/types/types';
import { Response } from 'express';
import { Tags } from './tags.model';

class TagsController {
  public async getAll(_: AuthRequest, res: Response) {
    try {
      const tags: Tags[] = await Tags.findAll();
      res.status(200).json({ tags });
    } catch (error) {
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}

export const tagsController = new TagsController();
