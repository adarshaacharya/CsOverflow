import { AuthRequest } from 'common/types/types';
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

  public async loadUser(req: AuthRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await authServices.loadUser(req.user!.id);
      res.status(201).json({ user });
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
