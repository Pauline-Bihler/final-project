'use client';

import { useRouter } from 'next/navigation';
// import { getUserBySessionToken } from '../../../database/users';
import styles from './ProfileButton.module.scss';

type Props = {
  params?: { username?: string };
};

export function ProfileButton({ params }: Props) {
  const router = useRouter();
  // const user = getUserBySessionToken();

  const profile = async () => {
    await router.push(`/profile/{user.username}`);
  };

  return (
    <div className={styles['centeredContainer']}>
      <button
        className={styles['profileButton']}
        type="button"
        onClick={profile}
      >
        {params?.username || 'Profile'}
      </button>
    </div>
  );
}

// import { cookies } from 'next/headers';
// import { useRouter } from 'next/navigation';
// import { getUserBySessionToken } from '../../../database/users';
// import styles from './ProfileButton.module.scss';

// type Props = {
//   params?: { username?: string };
// };

// export async function ProfileButton({ params }: Props) {
//   const router = useRouter();
//   const cookieStore = cookies();
//   const sessionToken = cookieStore.get('sessionToken');

//   if (!sessionToken) {
//     // Handle the case when there's no session token
//     return null; // or provide some default behavior
//   }

//   const user = await getUserBySessionToken(sessionToken.value);

//   const profile = async () => {
//     await router.push(`/profile/${user?.username}`);
//   };

//   return (
//     <div className={styles['centeredContainer']}>
//       <button
//         className={styles['profileButton']}
//         type="button"
//         onClick={profile}
//       >
//         {params?.username || 'Profile'}
//       </button>
//     </div>
//   );
// }
