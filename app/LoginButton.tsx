'use client';

import { useRouter } from 'next/navigation';
import styles from './LoginButton.module.scss';

export function LoginButton() {
  const router = useRouter();

  const login = async () => {
    await router.push('/login');
  };

  return (
    <div>
      <button className={styles['loginButton']} type="button" onClick={login}>
        Log-in
      </button>
    </div>
  );
}
