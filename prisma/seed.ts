import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/client/client';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });

const prisma = new PrismaClient({ adapter });

async function seed() {
  await prisma.user.createMany({
    data: [
        {
        name: 'Alice',
        email: 'alice@email.com',
        age: 25,
        isMarried: 'No',
        nationality: 'USA',
      },
      {
        name: 'Bob',
        email: 'bob@email.com',
        age: 30,
        isMarried: 'Yes',
        nationality: 'Canada',
      },
      {
        name: 'Charlie',
        email: 'charlie@email.com',
        age: 22,
        isMarried: 'No',
        nationality: 'UK',
      },
      {
        name: 'David',
        email: 'david@email.com',
        age: 35,
        isMarried: 'Yes',
        nationality: 'Australia',
      },
      {
        name: 'Emma',
        email: 'emma@email.com',
        age: 28,
        isMarried: 'No',
        nationality: 'India',
      },
      {
        name: 'Frank',
        email: 'frank@email.com',
        age: 40,
        isMarried: 'Yes',
        nationality: 'Germany',
      },
      {
        name: 'Grace',
        email: 'grace@email.com',
        age: 27,
        isMarried: 'No',
        nationality: 'France',
      },
      {
        name: 'Henry',
        email: 'henry@email.com',
        age: 33,
        isMarried: 'Yes',
        nationality: 'Italy',
      },
      {
        name: 'Isabella',
        email: 'isabella@email.com',
        age: 24,
        isMarried: 'No',
        nationality: 'Spain',
      },
      {
        name: 'Jack',
        email: 'jack@email.com',
        age: 29,
        isMarried: 'No',
        nationality: 'Brazil',
      },
      {
        name: 'Karen',
        email: 'karen@email.com',
        age: 37,
        isMarried: 'Yes',
        nationality: 'Mexico',
      },
      {
        name: 'Leo',
        email: 'leo@email.com',
        age: 26,
        isMarried: 'No',
        nationality: 'Japan',
      },
      {
        name: 'Mia',
        email: 'mia@email.com',
        age: 31,
        isMarried: 'Yes',
        nationality: 'South Korea',
      },
      {
        name: 'Nathan',
        email: 'nathan@email.com',
        age: 34,
        isMarried: 'No',
        nationality: 'Singapore',
      },
      {
        name: 'Olivia',
        email: 'olivia@email.com',
        age: 23,
        isMarried: 'No',
        nationality: 'New Zealand',
      },
      {
        name: 'Peter',
        email: 'peter@email.com',
        age: 38,
        isMarried: 'Yes',
        nationality: 'South Africa',
      },
      {
        name: 'Queenie',
        email: 'queenie@email.com',
        age: 32,
        isMarried: 'Yes',
        nationality: 'China',
      },
      {
        name: 'Ryan',
        email: 'ryan@email.com',
        age: 27,
        isMarried: 'No',
        nationality: 'Ireland',
      },
      {
        name: 'Sophia',
        email: 'sophia@email.com',
        age: 29,
        isMarried: 'Yes',
        nationality: 'Portugal',
      },
      {
        name: 'Thomas',
        email: 'thomas@email.com',
        age: 36,
        isMarried: 'Yes',
        nationality: 'Netherlands',
      },
      {
        name: 'Uma',
        email: 'uma@email.com',
        age: 21,
        isMarried: 'No',
        nationality: 'India',
      },
      {
        name: 'Victor',
        email: 'victor@email.com',
        age: 42,
        isMarried: 'Yes',
        nationality: 'Russia',
      },
      {
        name: 'Wendy',
        email: 'wendy@email.com',
        age: 26,
        isMarried: 'No',
        nationality: 'Sweden',
      },
      {
        name: 'Xavier',
        email: 'xavier@email.com',
        age: 39,
        isMarried: 'Yes',
        nationality: 'Belgium',
      },
      {
        name: 'Yara',
        email: 'yara@email.com',
        age: 28,
        isMarried: 'No',
        nationality: 'Egypt',
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
