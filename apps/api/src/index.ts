import dotenv from 'dotenv';
import { createServer } from './server';

dotenv.config();

const port = process.env.PORT || 80;
const app = createServer();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});