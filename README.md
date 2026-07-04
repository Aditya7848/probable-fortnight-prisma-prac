# These are my notes...

[Github Docs on MarkDown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

> [!CAUTION]
> PLEASE REMEMBER TO RESTART THE SERVER AFTER MAKING CHANGES TO YOUR CODE OR USE THE SCRIPT `tsx watch index.ts`
 

> [!IMPORTANT - you changed the schema, and go straight for seeding data and fail,  Please execute them in line]
> first create/apply migration `npx prisma migrate dev --name -yournewnameforschema`
> second generate prisma client `npx prisma generate`
> third seed the db `npx prisma db seed`


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
  
3. For generating PrismaClient you have to pass in an adapter for version-7
   - npm install @prisma/adapter-pg pg
     ```
     import { PrismaPg } from "@prisma/adapter-pg";
     import { PrismaClient } from "../prisma/generated/client";
     const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
     const prisma = new PrismaClient({ adapter });
     ```

4.  "npx prisma generate" - This command generates prisma Client
    - if you want to access user table that you have just created you cannot, you have to run npx prisma generate, after running you can access user in your code.

5.  Before you seed the data you have to delete the output line from generator why ?

      ```
      generator client {
        provider = "prisma-client"
        ~~output   = "../generated/prisma"~~
      }
      ```

    - Remove the generated folder at the root also ohterwise it wont seed why?
    - Run `npx prisma generate` again...

6.  for seed to run , if you encounter an error "No seed command configured" you have to add a seed property to the migration section in your prisma config file and NOT TO YOUR PACKAGE.JSON

7. Failed seed `PS\Practice\pedrotech-prisma> npx prisma db seed`

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

8. Successfully ran seed command `PS E:\Practice\pedrotech-prisma> npx prisma db seed`
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

9.  please for generate use a different path like the following
    ```
    generator client {
       provider = "prisma-client"
       output   = "../src/generated/client" // Set your custom folder here
     }
    ```
10.      ```
        const users = await prisma.user.findFirst()
        ```


> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

    

