import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

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
                res.json({
                    msg: 'User with provided email already exists',
                });
                return;
            }

            user = new Users({
                name,
                email,
                password,
            });
            await user.save();

            /**
             * Sing JWT, valid for 1 hour
             */
            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            res.status(201).json({ token });
        } catch (error) {
            console.log(error.message);
            res.status(500).json('Server error');
        }
    }
}

export const usersController = new UsersController();
