'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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
    <form
      onSubmit={async (event) => {
        event.preventDefault();
        await handleCreatePost();
      }}
    >
      <label>
        Title:
        <input
          value={textTitle}
          onChange={(event) => setTextTitle(event.currentTarget.value)}
        />
      </label>
      <label>
        Post any thoughts or questions:
        <input
          value={textContent}
          onChange={(event) => setTextContent(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <button>Post</button>
    </form>
  );
}
