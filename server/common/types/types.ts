import { Request } from 'express';
// import { Users } from '../../modules/users/users.model';

export interface AuthRequest extends Request {
  user?: { id: number };
}
