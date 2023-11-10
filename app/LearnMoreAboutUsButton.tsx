'use client';

import { useRouter } from 'next/navigation';
import styles from './LearnMoreAboutUsButton.module.scss';

export function LearnMoreAboutUsButton() {
  const router = useRouter();

  const learnMoreAboutUs = async () => {
    await router.push('/about');
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['learnMoreAboutUsButton']}
        type="button"
        onClick={learnMoreAboutUs}
      >
        Learn more about us ♥
      </button>
    </div>
  );
}
