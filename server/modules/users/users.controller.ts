import generateToken from '../../common/token/generate-jwt-token';
import { Request, Response } from 'express';

import { Users } from './users.model';
// import { usersService } from './users.service';

class UsersController {
  public async createOne(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      let user = await Users.findOne({
        where: { email },
      });
      if (user) {
        res
          .status(400)
          .json({ msg: 'User with provided email already exists' });
        return;
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
      console.log(error.message);
      res.status(500).json('Server error');
    }
  }
}

export const usersController = new UsersController();
