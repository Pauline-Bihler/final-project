import { ExploreButton } from './ExploreButton';
import { LearnMoreAboutUsButton } from './LearnMoreAboutUsButton';
// import Image from 'next/image';
import styles from './page.module.scss';

// import styles from './globals.scss';

export default function Home() {
  return (
    <main>
      <br />
      <div className={styles['image-container']}>
        <img src="/images/header.jpg" alt="header" width={1400} height={600} />
      </div>
      <br />
      <div className={styles['text']}>
        <h1>
          Step into our haven of paws and purrs, where compassion finds a
          forever home.
          <br />
          Find companionship, adopt happiness.
        </h1>
      </div>
      <LearnMoreAboutUsButton />
      <p className={styles['text']}>
        Don't let the adoption process slow you down. We help you find your
        perfect furry companion or facilitate the adoption paperwork in just 1
        day, guaranteed.
      </p>
      <br />
      <br />
      <br />
      <br />
      <div className={styles['dashed-container']}>
        <br />
        <h2 className={styles['text']}>How does the adoption process work?</h2>
        <div className={styles['image-container']}>
          <img
            src="/images/schedule.png"
            alt="schedule a meeting"
            width={450}
            height={450}
          />
          <img
            src="/images/meet.png"
            alt="meet the animal"
            width={450}
            height={450}
          />
          <img
            src="/images/home.png"
            alt="take home the animal"
            width={450}
            height={450}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className={styles['content-container']}>
        <div className={styles['explore-container']}>
          <h2 className={styles['explore-text']}>
            Explore our current residents. These adorable animals are waiting to
            find their forever homes at our shelter.
          </h2>
          <ExploreButton />
        </div>
        <div className={styles['adopt-container']}>
          <img src="/images/adopt.png" alt="adopt an animal" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 className={styles['text']}>A list of our partners & sponsors:</h2>
    </main>
  );
}
