import generateToken from '../../common/token/generate-jwt-token';
import { NextFunction, Request, Response } from 'express';

import { Users } from './users.model';
import { BadRequest } from '../../common/exceptions';

class UsersController {
  public async createOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      let user = await Users.findOne({
        where: { email },
      });
      if (user) {
        throw new BadRequest('User with provided email already exists');
      }

      user = new Users({
        name,
        email,
        password,
      });
      await user.save();

      const token = generateToken(user.id);

      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export const usersController = new UsersController();
