import { Request, Response } from 'express';
import { usersService } from './users.service';

class UsersController {
    public async createOne(req: Request, res: Response) {
        try {
            const user = await usersService.createOne(req.body);
            res.json(user);
        } catch (error) {
            console.warn(error);
        }
    }
}

export const usersController = new UsersController();
