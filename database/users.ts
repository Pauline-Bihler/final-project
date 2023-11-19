import { cache } from 'react';
import { User } from '../migrations/00000-createTableUsers';
import { sql } from './connect';

export type UserWithPasswordHash = User & {
  passwordHash: string;
};

export type UserPost = {
  postId: number;
  textTitle: string;
  textContent: string;
  username: string;
};

export type UserAdoption = {
  id: number;
  userId: number;
  animalName: string;
  questionOne: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  questionTwo: string;
  questionThree: string;
  questionFour: string;
  additionalRemarks: string | null;
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
  const [user] = await sql<
    { id: number; username: string; passwordHash: string }[]
  >`
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
    const [user] = await sql<
      { id: number; username: string; passwordHash: string }[]
    >`
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
  const [user] = await sql<{ id: number; username: string }[]>`
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

export const getUserPostBySessionToken = cache(async (token: string) => {
  const posts = await sql<UserPost[]>`
    SELECT
      posts.id AS post_id,
      posts.text_title AS text_title,
      posts.text_content AS text_content,
      users.username AS username
    FROM
      posts
      INNER JOIN users ON posts.user_id = users.id
      INNER JOIN sessions ON (
        sessions.token = ${token}
        AND sessions.user_id = users.id
        AND sessions.expiry_timestamp > now ()
      )
  `;
  return posts;
});

export const getAllUserPosts = cache(async () => {
  const posts = await sql<UserPost[]>`
    SELECT
      posts.id AS post_id,
      posts.text_title AS text_title,
      posts.text_content AS text_content,
      users.username AS username
    FROM
      posts
      INNER JOIN users ON posts.user_id = users.id
  `;
  return posts;
});

export const getAllUserAdoptions = cache(async () => {
  const adoptions = await sql<
    {
      adoptionId: number;
      animalName: string;
      questionOne: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      questionTwo: string;
      questionThree: string;
      questionFour: string;
      additionalRemarks: string | null;
      username: string;
    }[]
  >`
    SELECT
      adoptions.id AS adoption_id,
      adoptions.animal_name AS animal_name,
      adoptions.question_one AS question_one,
      adoptions.first_name AS first_name,
      adoptions.last_name AS last_name,
      adoptions.email AS email,
      adoptions.phone AS phone,
      adoptions.question_two AS question_two,
      adoptions.question_three AS question_three,
      adoptions.question_four AS question_four,
      adoptions.additional_remarks AS additional_remarks,
      users.username AS username
    FROM
      adoptions
      INNER JOIN users ON adoptions.user_id = users.id
  `;
  return adoptions;
});
