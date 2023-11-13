'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { getSafeReturnToPath } from '../../../util/validation';
import { LoginResponseBodyPost } from '../../api/(auth)/login/route';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [email, setEmail] = useState('');
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState(0);
  const [errors, setErrors] = useState<{ message: string }[]>([]);
  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
        // email,
        // firstName,
        // lastName,
        // age,
      }),
    });
    const data: LoginResponseBodyPost = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // console.log('Check:', data);
    // console.log('Check Return to: ', props.returnTo);

    router.push(
      getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    );
    // revalidatePath() throws unnecessary error, will be used when stable
    // revalidatePath('/(auth)/login')
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
      {/* <label>
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
      </label> */}
      <button>Log-in</button>

      {errors.map((error) => (
        <div className="error" key={`error-${error.message}`}>
          Error: {error.message}
        </div>
      ))}
    </form>
  );
}
