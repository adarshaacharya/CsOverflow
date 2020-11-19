import cors from 'cors';
import compression from 'compression';
import express, { Response } from 'express';
import path from 'path';

// routes
import { router as usersRoutes } from './modules/users/users.routes';
import { router as authRoutes } from './modules/auth/auth.routes';
import { router as postsRoutes } from './modules/posts/posts.routes';
import { router as commentsRoutes } from './modules/comments/comments.routes';
import { router as answersRoutes } from './modules/answers/answers.routes';
import { router as tagsRoutes } from './modules/tags/tags.routes';

// middleware
import { errorHandler } from './common/middlewares/errors.middleware';

//express config
const app: express.Express = express();
app.set('env', process.env.NODE_ENV);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '100mb' }));
app.use(compression());

// routes
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/posts/comments', commentsRoutes);
app.use('/api/posts/answers', answersRoutes);
app.use('/api/tags', tagsRoutes);

// middlewares
app.use(errorHandler);

// Serve static files in prod env
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client')));
  app.get('*', (_, res: Response): void => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
  });
}

export default app;
