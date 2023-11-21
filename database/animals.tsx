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

export const getAnimal = cache(async (animalId: number) => {
  const animals = await getAnimals();
  const animal = animals.find((a) => a.id === animalId);
  return animal;
});

export const getSingleCat = cache(async () => {
  const singleCat = await sql<
    { id: number; name: string; description: string | null }[]
  >`
    SELECT
      id,
      name,
      description
    FROM
      animals
    WHERE
      type = 'Cat'
    LIMIT
      1
  `;
  return singleCat;
});
