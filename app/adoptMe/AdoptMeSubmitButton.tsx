'use client';

import { useRouter } from 'next/navigation';
import styles from './AdoptMeSubmitButton.module.scss';

export function AdoptMeSubmitButton() {
  const router = useRouter();

  const viewAll = async () => {
    await router.push('thankyou/');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['adoptMeSubmitButton']}
        type="button"
        onClick={viewAll}
      >
        Submit ♥
      </button>
    </div>
  );
}
