import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getUserBySessionToken } from '../../database/users';
import CreateSchedulesForm from './CreateSchedulesForm';
import styles from './page.module.scss';

export const metadata = {
  title: 'Take me out for a walk Form |Kitties & Doggies of Austria',
  description: 'Adopt & support animals in need',
};

export default async function SchedulePage() {
  // 1. Checking if the sessionToken cookie exists
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. Check if the sessionToken cookie is still valid
  const user =
    sessionTokenCookie &&
    (await getUserBySessionToken(sessionTokenCookie.value));

  // 3. If the sessionToken cookie is invalid or doesn't exist, redirect to login with returnTo
  if (!user) redirect('/login?returnTo=/schedule');
  return (
    <div>
      <div>
        <div className={styles['horizontal-banner']}>
          <h1 className={styles['banner-text']}>
            Discover Your Future Furry Friend
          </h1>
          <h2 className={styles['banner-text']}>
            Schedule a Meetup, Connect, and
            <br />
            Begin Your Adoption Journey Today!
          </h2>
        </div>
        <br />
        <br />
        <p className={styles['text']}>
          Schedule a personalized meetup with the animals you connect with most,
          providing an opportunity for mutual understanding and a chance to
          build a lasting bond. Take your time getting to know each prospective
          pet, and if you find that special connection, proceed to complete the
          adoption form to welcome your new friend into your loving home. Begin
          this rewarding adventure with us, where every interaction is a step
          toward creating a forever home for these wonderful animals.
        </p>
      </div>
      <br />
      <br />
      <CreateSchedulesForm userId={user.id} />
      <br />
      <br />
      <br />
    </div>
  );
}
