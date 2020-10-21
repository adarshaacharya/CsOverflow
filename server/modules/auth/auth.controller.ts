import { NextFunction, Request, Response } from 'express';
import { authServices } from './auth.service';

class AuthController {
  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const token = await authServices.login(req.body);
      res.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
