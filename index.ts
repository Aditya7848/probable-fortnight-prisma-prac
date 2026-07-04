import dotenv from 'dotenv';
import express from 'express';
import checkDBConnection from './connectDB';
import { PrismaPg } from '@prisma/adapter-pg';
import {PrismaClient} from './src/generated/client/client';


const app = express();
dotenv.config();
app.use(express.json());

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.get('/', (req, res) => {
  res.send('Hello from server.');
});

app.get('/users', async(_, res) => {
  const users = await prisma.user.findMany()
  console.log(users)
  console.log(users.length)
  console.log(Array.isArray(users))
  res.json(users);
})


const PORT = process.env.PORT || 8080;

async function start(){
  await checkDBConnection();


  app.listen(PORT, () => {
    console.log(`server is listening in on ${PORT}`);
  });
}

start().catch(err => console.log(err))


