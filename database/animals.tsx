import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';
import { Animal } from '../migrations/00003-createTableAnimals';

export const getAnimals = cache(async () => {
  const animals = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
  `;
  return animals;
});

export const getCats = cache(async () => {
  const cats = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
    WHERE
      type = 'Cat'
  `;
  return cats;
});

export const getDogs = cache(async () => {
  const dogs = await sql<Animal[]>`
    SELECT
      *
    FROM
      animals
    WHERE
      type = 'Dog'
  `;
  return dogs;
});
