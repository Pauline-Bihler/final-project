'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { RegisterResponseBodyPost } from '../../api/(auth)/register/route';

// ('user client');

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        email,
        firstName,
        lastName,
        age,
      }),
    });
    const data: RegisterResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }
    // console.log('Check:', data);
    router.push(`/profile/${data.user.username}`);

    // revalidatePath() throws unnecessary error, will be used when stable
    // revalidatePath('/(auth)/register')
    router.refresh();
  }

  return (
    <form onSubmit={async (event) => await handleRegister(event)}>
      <label>
        Username{' '}
        <input onChange={(event) => setUsername(event.currentTarget.value)} />{' '}
      </label>
      <label>
        Password{' '}
        <input
          type="password"
          onChange={(event) => setPassword(event.currentTarget.value)}
        />{' '}
      </label>
      <label>
        Email{' '}
        <input
          type="email"
          onChange={(event) => setEmail(event.currentTarget.value)}
        />{' '}
      </label>
      <label>
        First name{' '}
        <input onChange={(event) => setFirstName(event.currentTarget.value)} />{' '}
      </label>
      <label>
        Last name{' '}
        <input onChange={(event) => setLastName(event.currentTarget.value)} />{' '}
      </label>
      <label>
        Age
        <input
          onChange={(event) => setAge(parseInt(event.currentTarget.value))}
        />
      </label>
      <button>Register</button>

      {errors.map((error) => (
        <div className="error" key={`error-${error.message}`}>
          Error: {error.message}
        </div>
      ))}
    </form>
  );
}
