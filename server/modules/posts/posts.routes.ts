import { Router } from 'express';
import { createValidator } from '../../common/middlewares/create-validator.middleware';
import { postsController } from './posts.controller';

import { createPostDto } from './posts.dtos';

export const router: Router = Router();

router.post('/', createValidator(createPostDto), postsController.createOne);
