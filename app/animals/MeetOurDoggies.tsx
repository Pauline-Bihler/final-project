'use client';

import { useRouter } from 'next/navigation';
import styles from './MeetOurDoggies.module.scss';

export function MeetOurDoggiesButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('/dogs');
  };

  return (
    <div>
      <button
        className={styles['meetOurDoggiesButton']}
        type="button"
        onClick={viewAll}
      >
        Meet our brave doggies 🐾
      </button>
    </div>
  );
}
