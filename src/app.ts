import express from 'express';
import { envs } from './config';
import routes from './routes/index.routes';


const app = express();

app.use( express.json() );
app.use( '/api', routes );

export default app;