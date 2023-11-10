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
      <LearnMoreAboutUsButton />
      <br />
      <h1>
        Step into our haven of paws and purrs, where compassion finds a forever
        home.
        <br />
        Find companionship, adopt happiness.
      </h1>
    </main>
  );
}
