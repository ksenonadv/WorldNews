import express from 'express';
import cors from 'cors';
import settings from './config';
import { registerRoutes } from './routes';
import bodyParser from 'body-parser'

const app = express();

app.use(cors());
app.use(bodyParser.json());
registerRoutes(app);
app.listen(settings.port, () => {
  console.log(`Server running on ${settings.port} port`);
});