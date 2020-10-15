import cors from 'cors';
import compression from 'compression';
import express, { Response } from 'express';
import path from 'path';

//express config
const app: express.Express = express();
app.set('env', process.env.NODE_ENV);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(compression());

// Serve static addes in prod env
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use('/', express.static(path.join(__dirname, 'client')));

    // index.html for all page routes
    app.get('*', (_, res: Response): void => {
        res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
    });
}

export default app;
