import { NextFunction, Request, Response } from 'express';
import { usersService } from './users.service';

class UsersController {
    public async createOne(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await usersService.createOne(req.body);
            res.json(user);
        } catch (error) {
            next(error);
        }
    }
}

export const usersController = new UsersController();
