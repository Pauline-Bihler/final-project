'use client';

import { useRouter } from 'next/navigation';
import styles from './ExploreButton.module.scss';

export function ExploreButton() {
  const router = useRouter();

  const explore = async () => {
    await router.push('/animals');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['exploreButton']}
        type="button"
        onClick={explore}
      >
        Explore ♥
      </button>
    </div>
  );
}
