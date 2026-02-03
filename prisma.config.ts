

import 'dotenv/config'; // ← This loads .env automatically
import { defineConfig, env } from 'prisma/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required in .env file');
}

/* export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    url: process.env.DATABASE_URL!, //Add ! (non-null assertion)
  },

  migrations: {
    seed: 'bun·./prisma/seed.ts',
    path: 'prisma/migrations',
  },
  datasource: {
      url: '[your database URL]',
    },
});
 */

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    // 3. Corrected the seed command (using 'ts-node' or 'bun')
    // Remove the dot '·' and ensures the command is valid
    path: 'prisma/migrations',
    seed: 'ts-node prisma/seed.ts', 
  },
  
  // 2. Only ONE datasource block is allowed
  datasource: {
    //url: process.env.DATABASE_URL!, 
    url: env('DATABASE_URL'),
  },

}); 

