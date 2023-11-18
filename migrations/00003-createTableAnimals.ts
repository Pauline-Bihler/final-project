import { Sql } from 'postgres';

export type Animal = {
  id: number;
  name: string;
  type: string;
  description: string | null;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      animals (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name VARCHAR(100) NOT NULL,
        type VARCHAR(100) NOT NULL,
        description text
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE animals `;
}
