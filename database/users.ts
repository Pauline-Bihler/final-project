import { cache } from 'react';
import { User } from '../migrations/00000-createTableusers';
import { sql } from '../util/connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const createUser = cache(
  async (username: string, passwordHash: string, email: string) => {
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          username,
          password_hash,
          email
        )
      VALUES
        (
          ${username},
          ${passwordHash},
          ${email}
        ) RETURNING id,
        username,
        email
    `;
    return user;
  },
);
