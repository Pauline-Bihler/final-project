import dotenv from 'dotenv';
import postgres from 'postgres';

dotenv.config();

const sql = postgres();
// 'postgres://username:password@host:port/database'

console.log(
  await sql`
    SELECT
      *
    FROM
      cats;
  `,
);

// Database connection needs to be open - example code how to end:
// await sql.end();
