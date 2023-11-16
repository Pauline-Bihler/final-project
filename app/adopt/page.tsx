import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getValidSessionByToken } from '../../database/sessions';
import AdoptMeForm from './AdoptMeForm';

export const metadata = {
  title: 'Adopt Me Form |Kitties & Doggies of Graz',
  description: 'Adopt & support animals in need',
};

export default async function AdoptPage() {
  // Task: Add redirect to home if user is logged in
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');
  // 2. Check if the sessionToken cookie is still valid
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  //  Query your database to check if this user is admin

  // 3. If the sessionToken cookie is invalid or doesn't exist, redirect to login with returnTo
  if (!session) redirect('/login?returnTo=/adopt');

  // 4. If the sessionToken cookie is valid, allow access to admin page

  return (
    <div>
      <AdoptMeForm />
    </div>
  );
}
