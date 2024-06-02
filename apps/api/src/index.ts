import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  console.log('GET /')
  res.send({ data: 'success' })

})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});