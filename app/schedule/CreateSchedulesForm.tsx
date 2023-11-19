'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './CreateSchedulesForm.module.scss';

export default function CreateSchedulesForm({ userId }: { userId: number }) {
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const router = useRouter();

  async function handleCreateSchedule() {
    await fetch('/api/schedule', {
      method: 'POST',
      body: JSON.stringify({
        day,
        time,
        userId,
      }),
    });
    router.refresh();
    setDay('');
    setTime('');
  }

  return (
    <div className={styles['overall-container']}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleCreateSchedule();
        }}
        className={styles['form']}
      >
        <div className={styles['form-row']}>
          <label className={styles['label']}>
            Please enter the day you want to visit:
            <input
              value={day}
              onChange={(event) => setDay(event.currentTarget.value)}
              placeholder="Monday - Saturday"
              className={styles['input']}
            />
          </label>
        </div>
        <div className={styles['form-row']}>
          <label className={styles['label']}>
            Please enter the time you want to visit:
            <input
              value={time}
              onChange={(event) => setTime(event.currentTarget.value)}
              placeholder="9:00 am - 5:00 pm"
              className={styles['input']}
            />
          </label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
