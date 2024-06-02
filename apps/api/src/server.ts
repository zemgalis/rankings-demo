import express from 'express';
import cors from 'cors';
import { getHandler } from './routes/getHandler';

export const createServer = () => {
	const app = express();
  app.use(cors());
  app.use(express.json());
  app.get('/', getHandler);

  return app;
}