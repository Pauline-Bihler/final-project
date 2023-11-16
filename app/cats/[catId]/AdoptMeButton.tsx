'use client';

import { useRouter } from 'next/navigation';
import styles from './AdoptMeButton.module.scss';

export function AdoptMeButton() {
  const router = useRouter();

  const adoptMe = async () => {
    await router.push('/adopt');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['adoptMeButton']}
        type="button"
        onClick={adoptMe}
      >
        Adopt Me ♥
      </button>
    </div>
  );
}
