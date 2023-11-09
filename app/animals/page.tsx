import Link from 'next/link';
import { MeetOurDoggiesButton } from './MeetOurDoggies';
import { MeetOurKittiesButton } from './MeetOurKitties';
import styles from './page.module.scss';

export const metadata: Metadata = {
  title: 'Animals | Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default function AnimalsPage() {
  return (
    <div>
      <h1 className={styles['h1']}>Welcome to our animals page ♥</h1>
      <br />
      <div className={styles['centeredContainer']}>
        <div className={styles['imageContainer']}>
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
        <div className={styles['imageContainer']}>
          <img
            src="/images/phil.jpg"
            alt="brown-dog"
            width={250}
            height={350}
          />
          <div className={styles['meetDoggiesContainer']}>
            <MeetOurDoggiesButton />
          </div>
        </div>
      </div>
    </div>
  );
}
