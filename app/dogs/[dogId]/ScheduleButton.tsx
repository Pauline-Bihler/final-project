'use client';

import { useRouter } from 'next/navigation';
import styles from './ScheduleButton.module.scss';

// import styles from './AdoptMeButton.module.scss';

export function ScheduleButton() {
  const router = useRouter();

  const schedule = async () => {
    await router.push('/schedule');
  };

  return (
    <div>
      <button
        className={styles['schedule-button']}
        type="button"
        onClick={schedule}
      >
        Schedule a meeting 🐾
      </button>
    </div>
  );
}
