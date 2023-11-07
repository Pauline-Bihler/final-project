import './globals.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kitties & Doggos of Austria',
  description: 'Adopt & support animals in need',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <h1>Layout title</h1> */}
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
              </ul>
              <ul>
                <li>
                  <Link data-test-id="cart-link" href="/help">
                    Help us
                  </Link>
                </li>
                <li>
                  <Link href="/forum">Forum</Link>
                </li>
                <li>
                  <Link href="/login">Log-in</Link>
                </li>
                <li>
                  <Link href="/register">Register</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
