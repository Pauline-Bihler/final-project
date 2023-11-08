'use client';
import { useState } from 'react';

// ('user client');

export default function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState(0);

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
    const data = response.json();
    console.log('Check:', data);
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
        <input onChange={(event) => setEmail(event.currentTarget.value)} />{' '}
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
    </form>
  );
}
