import * as bcrypt from 'bcryptjs';
import generateToken from '../../common/token/generate-jwt-token';

import { Request, Response } from 'express';
import { Users } from '../../modules/users/users.model';

class AuthController {
  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;

      const user = await Users.findOne({
        where: { email },
      });

      if (!user) {
        res.status(400).json({ msg: "User desn't exists" });
        return;
      }

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        res.status(400).json({ msg: 'Invalid email or password' });
        return;
      }

      const token: string = generateToken(user.id);
      res.status(201).json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Server error');
    }
  }
}

export const authController = new AuthController();
