import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { ReactNode } from 'react';
import { getUserBySessionToken } from '../database/users';
import LogoutButton from './(auth)/logout/LogoutButton';

// import { ProfileButton } from './profile/[username]/ProfileButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitties & Doggies of Austria',
  description: 'Adopt & support animals in need',
};

type Props = {
  children: ReactNode;
  // params?: { username?: string };
};

export default async function RootLayout(props: Props) {
  // Task: Display the logged in user's username in the navigation bar and hide the login and register links depending on whether the user is logged in or not
  // 1. Checking if the sessionToken cookie exists
  // 2. Get the current logged in user from the database using the sessionToken value
  // 3. Make decision whether to show the login and register links or not

  // 1. Checking if the sessionToken cookie exists
  const cookieStore = cookies();
  const sessionToken = cookieStore.get('sessionToken');

  // console.log('Sessions: ', sessionToken);

  const user =
    sessionToken && (await getUserBySessionToken(sessionToken.value));

  // console.log('Sessions: ', user);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navContainer">
          <header>
            <nav className="navHeader">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link data-test-id="products-link" href="/animals">
                    Animals
                  </Link>
                </li>
                <li>
                  <Link href="/help">Help us</Link>
                </li>
                <li>
                  <Link href="/forum">Forum</Link>
                </li>
                {/* <li>
                  <Link href="/animals-admin">Admin</Link>
                </li> */}
              </ul>
              {/* Separate container for login/register/logout links */}
              <div className="authLinks">
                {user ? (
                  <>
                    <div>Hi {user.username}, so happy you're back!</div>
                    {/* <ProfileButton /> */}
                    <LogoutButton />
                  </>
                ) : (
                  <ul>
                    <li>
                      <Link href="/register">Register</Link>
                    </li>
                    <li>
                      <Link href="/login">Log-in</Link>
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </header>
        </div>
        <div className="mainContent">{props.children}</div>
        <footer className="footer">
          <nav className="footer-nav">
            <ul>
              <li className="footer-list">
                <Link href="/about" className="footer-link">
                  About
                </Link>
              </li>
              <li className="footer-list">
                <Link href="/help" className="footer-link">
                  Help us
                </Link>
              </li>
            </ul>
          </nav>
          <p>All Rights Reserved</p>
        </footer>
      </body>
    </html>
  );
}
