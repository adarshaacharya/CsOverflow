// env variable config
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import app from './app';
import { databaseGenerate } from './config/database.config';

//db
databaseGenerate();

const hostname = 'localhost';
const PORT = process.env.PORT || 5000;

const handleListening = () =>
    console.log(`✅  Listening on: http://${hostname}:${PORT}`);

app.listen(PORT, handleListening);
