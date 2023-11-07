import Link from 'next/link';
import { MeetOurDoggiesButton } from './MeetOurDoggies';
import { MeetOurKittiesButton } from './MeetOurKitties';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Animals | Kitties & Doggos of Austria',
  description: 'Adopt & support animals in need',
};

export default function AnimalsPage() {
  return (
    <div>
      <h1>Welcome to our animals page ♥</h1>
      {/* <div className={styles['grid-container']}>
        {goodies.map((goody) => (
          <div
            key={`goody-div-${goody.id}`}
            className={styles['goodies-container']}
          >
            <Link
              data-test-id={`product-${goody.id}`}
              href={`/goodies/${goody.id}`}
            >
              {goody.goodyName}
            </Link> */}
      <br />
      <div className={styles['centeredContainer']}>
        <img
          src="/images/orange.jpg"
          alt="orange-cat"
          width={250}
          height={350}
        />
        <div className={styles['meetKittiesContainer']}>
          <MeetOurKittiesButton />
        </div>
      </div>
      <br />
      <div className={styles['centeredContainer']}>
        <img src="/images/phil.jpg" alt="brown-dog" width={250} height={350} />
        <div className={styles['meetDoggiesContainer']}>
          <MeetOurDoggiesButton />
        </div>
      </div>
      {/* <div　className={styles['centeredContainer']}>
        <img src="/images/phil.jpg" alt="brown-dog" width={250} height={350} />
        <div className={styles['meetKittiesDoggiesContainer']}
         <MeetOurDoggiesButton />
        </div>
      </div> */}
      {/* <img
              src={`/images/${goody.goodyName}.jpg`}
              alt={goody.goodyName}
              width={400}
              height={350}
              className={styles['zoom-image']}
            /> */}
      {/* </div>
        ))}
      </div> */}
    </div>
  );
}
