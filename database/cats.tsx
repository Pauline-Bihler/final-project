const cats = [
  { id: 1, name: 'Cindy', type: 'Cat', description: '' },
  { id: 2, name: 'Leo', type: 'Cat', description: '' },
  { id: 3, name: 'Lily', type: 'Cat', description: '' },
  { id: 4, name: 'Orange', type: 'Cat', description: '' },
  { id: 5, name: 'Simba', type: 'Cat', description: '' },
  { id: 6, name: 'Suki', type: 'Cat', description: '' },
];

export function getCats() {
  return cats;
}

export function getCat(id) {
  return cats.find((cat) => cat.id === id);
}
