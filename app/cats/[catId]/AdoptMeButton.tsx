'use client';

import { useRouter } from 'next/navigation';
import styles from './AdoptMeButton.module.scss';

export function AdoptMeButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('../adoptMe/');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['adoptMeButton']}
        type="button"
        onClick={viewAll}
      >
        Adopt Me ♥
      </button>
    </div>
  );
}
