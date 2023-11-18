import { Metadata } from 'next';
import Link from 'next/link';
// import { getCats } from '../../database/cats';
// import { getAnimals } from '../../database/animals';
import { getCats } from '../../database/animals';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Kitties | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default async function CatsPage() {
  const cats = await getCats();
  return (
    <div>
      <h1>Meet our cute kitties ♥</h1>

      <div className={styles['image-container']}>
        {cats.map((cat) => {
          return (
            <div key={`cat-div-${cat.id}`} className={styles['image-item']}>
              {/* <Link href={`/cats/${cat.id}`}>{cat.name}</Link> */}
              <img
                src={`/images/${cat.name}.jpg`}
                alt={cat.name}
                width={250}
                height={350}
              />
              <br />
              <Link href={`/cats/${cat.id}`} className={styles['styles-link']}>
                {cat.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default async function CatsPage() {
//   const animals = await getAnimals();
//   return (
//     <div>
//       <h1>Meet our cute kitties ♥</h1>

//       {animals.map((animal) => {
//         return (
//           <div key={`cat-div-${animal.id}`}>
//             <Link href={`/cats/${animal.id}`}>{animal.name}</Link>
//             <img
//               src={`/images/${animal.name}.jpg`}
//               alt={animal.name}
//               width={250}
//               height={350}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default function CatsPage() {
//   const cats = getCats();
//   return (
//     <div>
//       <h1>Meet our cute kitties ♥</h1>

//       {cats.map((cat) => {
//         return (
//           <div key={`cat-div-${cat.id}`}>
//             <Link href={`/cats/${cat.id}`}>{cat.name}</Link>
//             <img
//               src={`/images/${cat.name}.jpg`}
//               alt={cat.name}
//               width={250}
//               height={350}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
