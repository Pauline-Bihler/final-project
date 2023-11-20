'use client';

import { useRouter } from 'next/navigation';
import styles from './MeetOurKitties.module.scss';

export function MeetOurKittiesButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('/cats');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['meetOurKittiesButton']}
        type="button"
        onClick={viewAll}
      >
        Meet our cute kitties 🐾
      </button>
    </div>
  );
}
