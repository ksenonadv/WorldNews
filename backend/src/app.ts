import express from 'express';
import cors from 'cors';
import settings from './config';
import { registerRoutes } from './routes';

const app = express();

app.use(cors());
registerRoutes(app);
app.listen(settings.port, () => {
  console.log(`Server running on ${settings.port} port`);
});