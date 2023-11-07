const cats = [
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
];

export function getCats() {
  return cats;
}

export function getCat(id: number) {
  return cats.find((cat) => cat.id === id);
}
