import { Sql } from 'postgres';

export type Post = {
  id: number;
  userId: number;
  textTitle: string;
  textContent: string;
};

export async function up(sql: Sql) {
  await sql`
    CREATE TABLE
      posts (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        user_id INTEGER NOT NULL REFERENCES users (id) ON DELETE CASCADE,
        text_title VARCHAR(300) NOT NULL,
        text_content text NOT NULL
      );
  `;
}

export async function down(sql: Sql) {
  await sql` DROP TABLE posts `;
}
