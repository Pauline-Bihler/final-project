'use client';

import { useRouter } from 'next/navigation';
// import { getUserBySessionToken } from '../../../database/users';
import styles from './ProfileButton.module.scss';

type Props = {
  params?: { username?: string };
};

export function ProfileButton({ params }: Props) {
  const router = useRouter();
  // const user = getUserBySessionToken();

  const profile = async () => {
    await router.push(`/profile/{user.username}`);
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['profileButton']}
        type="button"
        onClick={profile}
      >
        {params?.username || 'Profile'}
      </button>
    </div>
  );
}
