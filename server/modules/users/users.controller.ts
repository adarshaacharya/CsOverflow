import { NextFunction, Request, Response } from 'express';
import { usersService } from './users.service';

class UsersController {
  public async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const token = await usersService.createOne(req.body);
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export const usersController = new UsersController();
