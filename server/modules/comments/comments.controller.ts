import { Response, NextFunction } from 'express';

class CommentsController {
  public async createOne(
    req,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
}
export const commentsController = new CommentsController();
