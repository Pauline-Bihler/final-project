import Link from 'next/link';
import { getDogs } from '../../database/dogs';

export const metadata: Metadata = {
  title: 'Doggies | Kitties & Doggos of Austria',
  description: 'Adopt & support animals in need',
};

export default function DogsPage() {
  const dogs = getDogs();
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
