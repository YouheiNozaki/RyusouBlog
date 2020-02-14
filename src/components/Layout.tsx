import * as React from 'react';
import Link from 'next/link';
import Head from 'next/head';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'Ryusou Blog' }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/blogs">
          <a>BLOG</a>
        </Link>
        <Link href="/info">
          <a>INFO</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </nav>
    </header>
    {children}
    <footer>
      <div>
        <p>
          <small>&copy; 2020 Ryusou</small>
        </p>
      </div>
    </footer>
  </>
);

export default Layout;
