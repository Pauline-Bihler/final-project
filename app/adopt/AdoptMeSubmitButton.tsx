'use client';

import { useRouter } from 'next/navigation';
import styles from './AdoptMeSubmitButton.module.scss';

export function AdoptMeSubmitButton() {
  const router = useRouter();

  const adoptMe = async () => {
    await router.push('/thankyou');
  };

  return (
    <div>
      <button
        className={styles['adoptMeSubmitButton']}
        type="button"
        onClick={adoptMe}
      >
        Submit 🐾
      </button>
    </div>
  );
}
