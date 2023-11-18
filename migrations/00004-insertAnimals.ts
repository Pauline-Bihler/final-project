import { Sql } from 'postgres';

const animals = [
  {
    id: 1,
    name: 'Cindy',
    type: 'Cat',
    description:
      'Cindy is very warm and loving. She will always stay with you and take a nap.',
  },
  {
    id: 2,
    name: 'Leo',
    type: 'Cat',
    description:
      'Leo needs time to trust his new family but once he does, he is very loyal and warm.',
  },
  {
    id: 3,
    name: 'Lily',
    type: 'Cat',
    description:
      'Lily is our little adventurer. She loves to be outside, rain or shine.',
  },
  {
    id: 4,
    name: 'Orange',
    type: 'Cat',
    description:
      'Orange is chonky, cute and lovable. She enjoys cuddles and kisses.',
  },
  {
    id: 5,
    name: 'Simba',
    type: 'Cat',
    description:
      'Simba has been with us for quite some time. He is very patient and he is still waiting for his new family to take him. He loves treats and belly rubs.',
  },
  {
    id: 6,
    name: 'Suki',
    type: 'Cat',
    description:
      'Suki is a little playful and feisty. She does not trust other kitties well but is very kind to her humans.',
  },
  {
    id: 7,
    name: 'Archie',
    type: 'Dog',
    description:
      'Archie is very playful and friendly. He likes to play outside in the garden.',
  },
  {
    id: 8,
    name: 'Bella',
    type: 'Dog',
    description:
      'Bella likes spending time outdoors. You can bring her hiking.',
  },
  {
    id: 9,
    name: 'Lola',
    type: 'Dog',
    description:
      'Lola is very young and shy. She likes to cuddle with her humans and eat treats.',
  },
  {
    id: 10,
    name: 'Manny',
    type: 'Dog',
    description:
      'Manny is our little guardian dog, he likes to stay with kids and takes care of them.',
  },
  {
    id: 11,
    name: 'Phil',
    type: 'Dog',
    description:
      'Phil likes to sleep a lot and eat tons of goodies. He needs his regular walks as well.',
  },
  {
    id: 12,
    name: 'Yuki',
    type: 'Dog',
    description:
      'Yuki is a small furry ball or energy. He likes to play outdoors and indoors.',
  },
];

export async function up(sql: Sql) {
  for (const animal of animals) {
    await sql`
      INSERT INTO
        animals (
          name,
          type,
          description
        )
      VALUES
        (
          ${animal.name},
          ${animal.type},
          ${animal.description}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const animal of animals) {
    await sql`
      DELETE FROM animals
      WHERE
        id = ${animal.id}
    `;
  }
}
