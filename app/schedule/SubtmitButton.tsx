'use client';

import { useRouter } from 'next/navigation';
import style from './SubmitButton.module.scss';

export function SubmitButton() {
  const router = useRouter();

  const submit = async () => {
    await router.push('/thankyou');
  };

  return (
    <div>
      <button className={style['submitButton']} type="button" onClick={submit}>
        Submit 🐾
      </button>
    </div>
  );
}
