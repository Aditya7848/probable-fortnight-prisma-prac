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

2.  this command "npx prisma migrate dev --name init"
    - Well, the npx prisma will obviously get us to be able to execute Prisma commands. Then the migrate command is basically telling Prisma to apply the schema changes to our database. Then the dev over here is just to say to Prisma that this is all in development.
    - And then we can give a name for this migration. So every time you make changes to your tables in uh your posgress or whatever database you're using, it is good for you to keep track of all the different migrations that you did.
    - So you give a name and since this is the first time we're making any changes to our table, I'm going to call it init. So we do d-name and then the name of the migration.

3.  "npx prisma generate" - This command generates prisma Client
    - if you want to access user table that you have just created you cannot, you have to run npx prisma generate, after running you can access user in your code.

      ```
      import { PrismaClient } from "@prisma/client";
      const prisma = new PrismaClient();
      const users = await prisma.user.findMany();
      ```

4.  Before you seed the data you have to delete the output line from generator why ?

```
generator client {
  provider = "prisma-client"
  ~~output   = "../generated/prisma"~~
}
```

    - Remove the generated folder at the root also ohterwise it wont seed why?
    - Run `npx prisma generate` again...

5.  for seed to run , if you encounter an error "No seed command configured" you have to add a seed property to the migration section in your prisma config file and NOT TO YOUR PACKAGE.JSON

> [!Note]
> PS E:\Practice\pedrotech-prisma> npx prisma db seed

      Loaded Prisma config from prisma.config.ts.

      ⚠️ No seed command configured

      To seed your database, add a seed property to the migrations section in your Prisma config file.

      Example

        // prisma.config.ts
        export default defineConfig({
          migrations: {
            seed: 'bun·./prisma/seed.ts',
          },
          datasource: {
            url: '[your database URL]',
          },
        })

      > PS E:\Practice\pedrotech-prisma> npx prisma db seed
      Loaded Prisma config from prisma.config.ts.

      Running seed command `tsx prisma/seed.ts` ...
      (node:22356) Warning: SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'.
      In the next major version (pg-connection-string v3.0.0 and pg v9.0.0), these modes will adopt standard libpq semantics, which have weaker security guarantees.

      To prepare for this change:
      - If you want the current behavior, explicitly use 'sslmode=verify-full'
      - If you want libpq compatibility now, use 'uselibpqcompat=true&sslmode=require'

      See https://www.postgresql.org/docs/current/libpq-ssl.html for libpq SSL mode definitions.
      (Use `node --trace-warnings ...` to show where the warning was created)

      The seed command has been executed.

6. please for generate use a different path like the following
   ```
   generator client {
      provider = "prisma-client"
      output   = "../src/generated/client" // Set your custom folder here
    }
   ```
7. 

    ```
    const users = await prisma.user.findFirst()
    ```
8. > [!Note]
    > PLEASE REMEMBER TO RESTART THE SERVER AFTER MAKING CHANGES TO YOUR CODE OR USE THE SCRIPT `tsx watch index.ts`