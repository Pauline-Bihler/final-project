const dogs = [
  { id: 1, name: 'Archie', type: 'Dog', description: '' },
  { id: 2, name: 'Bella', type: 'Dog', description: '' },
  { id: 3, name: 'Lola', type: 'Dog', description: '' },
  { id: 4, name: 'Manny', type: 'Dog', description: '' },
  { id: 5, name: 'Phil', type: 'Dog', description: '' },
  { id: 6, name: 'Yuki', type: 'Dog', description: '' },
];

export function getDogs() {
  return dogs;
}

export function getDog(id) {
  return dogs.find((dog) => dog.id === id);
}
