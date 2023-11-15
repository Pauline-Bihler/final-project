'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { logout } from './actions';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <form action="/logout" method="post">
      <button className="logoutButton" onClick={handleLogout}>
        Logout
      </button>
    </form>
  );
}

// // import { redirect } from 'next/navigation';
// import React from 'react';
// import { logout } from './actions';

// // redirect('/login');

// export default function LogoutButton() {
//   return (
//     <form>
//       <button className="logoutButton" formAction={logout}>
//         Logout{' '}
//       </button>
//     </form>
//   );
// }
