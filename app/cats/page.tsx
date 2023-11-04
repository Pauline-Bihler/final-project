import Link from 'next/link';
import { getCats } from '../../database/cats';

export default function CatsPage() {
  const cats = getCats();
  return (
    <div>
      <h1>Meet our cute kitties ♥</h1>

      {cats.map((cat) => {
        return (
          <div key={`cat-div-${cat.id}`}>
            <Link href={`/cats/${cat.id}`}>{cat.name}</Link>
            <img
              src={`/images/${cat.name}.jpg`}
              alt={cat.name}
              width={250}
              height={350}
            />
          </div>
        );
      })}
    </div>
  );
}
