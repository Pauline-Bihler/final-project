import { Sql } from 'postgres';

export type Schedule = {
  id: number;
  userId: number;
  day: string;
  time: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      schedules (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        DAY VARCHAR(100) NOT NULL,
        TIME VARCHAR(100) NOT NULL
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE schedules `;
}
