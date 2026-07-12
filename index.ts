import dotenv from 'dotenv';
import express from 'express';
import checkDBConnection from './connectDB';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './src/generated/client/client';

const app = express();
dotenv.config();
app.use(express.json());

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.get('/', (req, res) => {
  res.send('Hello from server.');
});

app.get('/users', async (_, res) => {
  const users = await prisma.user.findMany({
    where: {
      isMarried: true,
    },
    select: {
      name: true,
      age:true,
      nationality:true,

    },
    orderBy: {
      age: 'asc',
    },
    take: 10,
  });

  res.json(users);
});

app.put('/users', async(req, res) => {
  const updateUser = await prisma.user.update({
    where:{email:'liam@email.com'},
    data:{
      age:75
    }
  })
  res.json(updateUser);
})

app.delete('/users', async(req, res) => {
  const deleteUser = await prisma.user.delete({
    where:{email:'liam@email.com'}
  })
  res.json(deleteUser)
})

const PORT = process.env.PORT || 8080;

async function start() {
  await checkDBConnection();

  app.listen(PORT, () => {
    console.log(`server is listening in on ${PORT}`);
  });
}

start().catch((err) => console.log(err));
