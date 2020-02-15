import * as React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';

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
    <Header />
    <Nav />
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
