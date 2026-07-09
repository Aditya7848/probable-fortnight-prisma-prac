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
        age: 24,
        isMarried: false,
        nationality: 'USA',
      },
      {
        name: 'Bob',
        email: 'bob@email.com',
        age: 31,
        isMarried: true,
        nationality: 'Canada',
      },
      {
        name: 'Charlie',
        email: 'charlie@email.com',
        age: 27,
        isMarried: false,
        nationality: 'United Kingdom',
      },
      {
        name: 'David',
        email: 'david@email.com',
        age: 36,
        isMarried: true,
        nationality: 'Australia',
      },
      {
        name: 'Emma',
        email: 'emma@email.com',
        age: 22,
        isMarried: false,
        nationality: 'India',
      },
      {
        name: 'Frank',
        email: 'frank@email.com',
        age: 40,
        isMarried: true,
        nationality: 'Germany',
      },
      {
        name: 'Grace',
        email: 'grace@email.com',
        age: 29,
        isMarried: false,
        nationality: 'France',
      },
      {
        name: 'Henry',
        email: 'henry@email.com',
        age: 34,
        isMarried: true,
        nationality: 'Italy',
      },
      {
        name: 'Isabella',
        email: 'isabella@email.com',
        age: 26,
        isMarried: false,
        nationality: 'Spain',
      },
      {
        name: 'Jack',
        email: 'jack@email.com',
        age: 38,
        isMarried: true,
        nationality: 'Brazil',
      },
      {
        name: 'Karen',
        email: 'karen@email.com',
        age: 33,
        isMarried: true,
        nationality: 'Mexico',
      },
      {
        name: 'Liam',
        email: 'liam@email.com',
        age: 21,
        isMarried: false,
        nationality: 'Ireland',
      },
      {
        name: 'Mia',
        email: 'mia@email.com',
        age: 30,
        isMarried: true,
        nationality: 'South Korea',
      },
      {
        name: 'Nathan',
        email: 'nathan@email.com',
        age: 28,
        isMarried: false,
        nationality: 'Singapore',
      },
      {
        name: 'Olivia',
        email: 'olivia@email.com',
        age: 25,
        isMarried: false,
        nationality: 'New Zealand',
      },
      {
        name: 'Peter',
        email: 'peter@email.com',
        age: 42,
        isMarried: true,
        nationality: 'South Africa',
      },
      {
        name: 'Queenie',
        email: 'queenie@email.com',
        age: 37,
        isMarried: true,
        nationality: 'China',
      },
      {
        name: 'Ryan',
        email: 'ryan@email.com',
        age: 32,
        isMarried: false,
        nationality: 'Japan',
      },
      {
        name: 'Sophia',
        email: 'sophia@email.com',
        age: 27,
        isMarried: false,
        nationality: 'Portugal',
      },
      {
        name: 'Thomas',
        email: 'thomas@email.com',
        age: 45,
        isMarried: true,
        nationality: 'Netherlands',
      },
      {
        name: 'Uma',
        email: 'uma@email.com',
        age: 23,
        isMarried: false,
        nationality: 'India',
      },
      {
        name: 'Victor',
        email: 'victor@email.com',
        age: 39,
        isMarried: true,
        nationality: 'Russia',
      },
      {
        name: 'Wendy',
        email: 'wendy@email.com',
        age: 35,
        isMarried: true,
        nationality: 'Sweden',
      },
      {
        name: 'Xavier',
        email: 'xavier@email.com',
        age: 29,
        isMarried: false,
        nationality: 'Belgium',
      },
      {
        name: 'Yara',
        email: 'yara@email.com',
        age: 26,
        isMarried: false,
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
