const dogs = [
  {
    id: 1,
    name: 'Archie',
    type: 'Dog',
    description:
      'Archie is very playful and friendly. He likes to play outside in the garden.',
  },
  {
    id: 2,
    name: 'Bella',
    type: 'Dog',
    description:
      'Bella likes spending time outdoors. You can bring her hiking.',
  },
  {
    id: 3,
    name: 'Lola',
    type: 'Dog',
    description:
      'Lola is very young and shy. She likes to cuddle with her humans and eat treats.',
  },
  {
    id: 4,
    name: 'Manny',
    type: 'Dog',
    description:
      'Manny is our little guardian dog, he likes to stay with kids and takes care of them.',
  },
  {
    id: 5,
    name: 'Phil',
    type: 'Dog',
    description:
      'Phil likes to sleep a lot and eat tons of goodies. He needs his regular walks as well.',
  },
  {
    id: 6,
    name: 'Yuki',
    type: 'Dog',
    description:
      'Yuki is a small furry ball or energy. He likes to play outdoors and indoors.',
  },
];

export function getDogs() {
  return dogs;
}

export function getDog(id: number) {
  return dogs.find((dog) => dog.id === id);
}
