import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { creteUser, getUsers } from './db-mysql';

dotenv.config();

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.get('/', async (req: Request, res: Response) => {
  const users = await getUsers();
  res.send('test on change');
});

app.get('/create-user', async (req: Request, res: Response) => {
  const createdUser = await creteUser('Ivan', 'Ivanov', 33);
  res.send(createdUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
