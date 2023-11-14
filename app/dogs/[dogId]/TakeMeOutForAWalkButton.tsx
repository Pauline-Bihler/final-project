'use client';

import { useRouter } from 'next/navigation';
import styles from './TakeMeOutForAWalkButton.module.scss';

// import styles from './AdoptMeButton.module.scss';

export function TakeMeOutForAWalkButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('/takeMeOutForAWalk');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['takeMeOutForAWalkButton']}
        type="button"
        onClick={viewAll}
      >
        Take me out for a walk ♥
      </button>
    </div>
  );
}
