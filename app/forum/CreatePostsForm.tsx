'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './forum.module.scss';

export default function CreatePostsForm({ userId }: { userId: number }) {
  const [textContent, setTextContent] = useState('');
  const [textTitle, setTextTitle] = useState('');

  const router = useRouter();

  async function handleCreatePost() {
    await fetch('/api/forum', {
      method: 'POST',
      body: JSON.stringify({
        textTitle,
        textContent,
        userId,
      }),
    });
    router.refresh();
    setTextTitle('');
    setTextContent('');
  }

  return (
    <div className={styles['overall-container']}>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await handleCreatePost();
        }}
        className={styles['form']}
      >
        <div className={styles['form-row']}>
          <label className={styles['label']}>
            Title:
            <input
              value={textTitle}
              onChange={(event) => setTextTitle(event.currentTarget.value)}
              placeholder="Title"
              className={styles['input']}
            />
          </label>
        </div>
        <div className={styles['form-row']}>
          <label className={styles['label']}>
            Post any thoughts or tips:
            <input
              value={textContent}
              onChange={(event) => setTextContent(event.currentTarget.value)}
              placeholder="thoughts or tips"
              className={styles['input']}
            />
          </label>
        </div>
        <button className={styles['post-button']}>Post 🐾</button>
      </form>
    </div>
  );
}
