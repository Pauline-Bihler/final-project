import { cache } from 'react';
import { User } from '../migrations/00000-createTableusers';
import { sql } from './connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export const createUser = cache(
  async (
    username: string,
    passwordHash: string,
    email: string,
    firstName: string,
    lastName: string,
    age: number,
  ) => {
    // console.log(username, firstName);
    const [user] = await sql<User[]>`
      INSERT INTO
        users (
          username,
          password_hash,
          email,
          first_name,
          last_name,
          age
        )
      VALUES
        (
          ${username.toLowerCase()},
          ${passwordHash},
          ${email},
          ${firstName},
          ${lastName},
          ${age}
        ) RETURNING id,
        username,
        email,
        first_name,
        last_name,
        age
    `;
    return user;
  },
);

export const getUserByUsername = cache(async (username: string) => {
  const [user] = await sql<User[]>`
    SELECT
      id,
      username,
      password_hash
    FROM
      users
    WHERE
      username = ${username.toLowerCase()}
  `;
  return user;
});

export const getUserWithPasswordHashByUsername = cache(
  async (username: string) => {
    const [user] = await sql<UserWithPasswordHash[]>`
      SELECT
        id,
        username,
        password_hash
      FROM
        users
      WHERE
        username = ${username.toLowerCase()}
    `;
    return user;
  },
);

export const getUserBySessionToken = cache(async (token: string) => {
  const [user] = await sql<User[]>`
    SELECT
      users.id,
      users.username
    FROM
      users
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now ()
      )
  `;
  return user;
});
