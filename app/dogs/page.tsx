import { Metadata } from 'next';
import Link from 'next/link';
// import { getDogs } from '../../database/dogs';
import { getDogs } from '../../database/animals';

export const metadata: Metadata = {
  title: 'Doggies | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default async function DogsPage() {
  const dogs = await getDogs();
  return (
    <div>
      <h1> Meet our brave doggies</h1>
      {dogs.map((dog) => {
        return (
          <div key={`dog-div-${dog.id}`}>
            <Link href={`/dogs/${dog.id}`}>{dog.name}</Link>
            <img
              src={`/images/${dog.name}.jpg`}
              alt={dog.name}
              width={250}
              height={350}
            />
          </div>
        );
      })}
    </div>
  );
}
