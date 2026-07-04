import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/prisma/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({ adapter });

async function seed() {
  await prisma.user.createMany({
    data: [
      { name: 'alise', email: 'alice@email.com' },
      {
        name: 'bob',
        email: 'bob@email.com',
      },
      {
        name: 'Hector',
        email: 'hector@email.com',
      },
      {
        name: 'pedro',
        email: 'pedro@email.com',
      },
    ],
  });
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
