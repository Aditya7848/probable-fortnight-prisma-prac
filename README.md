# These are my notes...

1. You can check if you are connected to your NeonDB

```
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Required for secure Neon connections
});

async function checkConnection() {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT NOW();');
    console.log('✅ Connected! Server time:', res.rows[0].now);
    client.release();
  } catch (err) {
    console.error('❌ Connection error:', err.stack);
  }
}
checkConnection();

```

2. this command "npx prisma migrate dev --name init"
   - Well, the npx prisma will obviously get us to be able to execute Prisma commands. Then the migrate command is basically telling Prisma to apply the schema changes to our database. Then the dev over here is just to say to Prisma that this is all in development.
   - And then we can give a name for this migration. So every time you make changes to your tables in uh your posgress or whatever database you're using, it is good for you to keep track of all the different migrations that you did.
   - So you give a name and since this is the first time we're making any changes to our table, I'm going to call it init. So we do d-name and then the name of the migration.

3. "npx prisma generate" - This command generates prisma Client
   - if you want to access user table that you have just created you cannot, you have to run npx prisma generate, after running you can access user in your code.

     ```
     import { PrismaClient } from "@prisma/client";
     const prisma = new PrismaClient();
     const users = await prisma.user.findMany();
     ```

4. Before you seed the data you have to delete the output line from generator why ?
   ```
   generator client {
     provider = "prisma-client"
     ~~ output   = "../generated/prisma" ~~
   }
   ```

   - Remove the generated folder at the root also ohterwise it wont seed why?
