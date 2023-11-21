import { ExploreButton } from './ExploreButton';
import { LearnMoreAboutUsButton } from './LearnMoreAboutUsButton';
// import Image from 'next/image';
import styles from './page.module.scss';

// import styles from './globals.scss';

export default function Home() {
  return (
    <main>
      {/* <div className={styles['text']}>
        <h1>
          Step into our haven of paws and purrs, where compassion finds a
          forever home.
        </h1>
      </div> */}
      {/* <div className={styles['image-container']}>
        <img src="/images/header.jpeg" alt="header" width={800} height={500} />
      </div>
      <br /> */}
      <div className={styles['header-image-container']}>
        <img
          src="/images/header.jpeg"
          alt="header"
          width={1350}
          height={500}
          className={styles['dark-image-container']}
        />

        <div className={styles['overlay-text-one']}>
          Kitties & Doggies Of Graz
        </div>
        <div className={styles['overlay-text-two']}>
          Find companionship, adopt happiness.
        </div>
        <div className={styles['overlay-button']}>
          <ExploreButton />
        </div>
      </div>
      <br />
      {/* <div className={styles['text']}>
        <h1>
          Step into our haven of paws and purrs, where compassion finds a
          forever home.
          <br />
          Find companionship, adopt happiness.
        </h1>
      </div> */}
      <br />
      <div className={styles['horizontal-banner']}>
        <div className={styles['text']}>
          <h1 className={styles['banner-text']}>
            Step into our haven of paws and purrs, where compassion finds a
            forever home.
          </h1>
        </div>
      </div>
      <br />
      <br />
      <h2 className={styles['text']}>
        Don't let the adoption process slow you down.
        <br />
        {/* We help you find your perfect furry companion or facilitate the adoption
        paperwork in just 1 day, guaranteed. */}
        We are dedicated to helping you find your perfect furry companion or
        <br />
        facilitating the adoption paperwork with efficiency and care.
      </h2>
      <br />
      <br />
      <div className={styles['dashed-container']}>
        <h1 className={styles['text']}>How does the adoption process work?</h1>
        <div className={styles['process-image-container']}>
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
      <div className={styles['gradient-line']}>
        <div className={styles['content-container']}>
          <div className={styles['explore-container']}>
            <h2 className={styles['explore-text']}>
              {/* Explore the tales of our delightful residents, eager to find
              forever homes at our shelter.  */}
              Curious to learn more about our shelter?
              <br />
              Visit our About page for an in-depth look into their journey.
            </h2>
            <LearnMoreAboutUsButton />
          </div>
          <div className={styles['adopt-container']}>
            <img
              src="/images/adopt.png"
              alt="adopt an animal"
              // width={450}
              // height={450}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h2 className={styles['text']}>A list of our partners & sponsors:</h2>
      <div className={styles['sponsor-image']}>
        <img
          src="/images/sponsors.png"
          alt="adopt an animal"
          width={1050}
          height={450}
        />
      </div>
    </main>
  );
}
