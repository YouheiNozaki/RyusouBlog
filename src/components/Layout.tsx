import * as React from 'react';
import { withTheme } from 'emotion-theming';
import Head from 'next/head';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import { Container } from './Container';

type Props = {
  title?: string;
};

const Layout: React.FC<Props> = ({ children, title = 'Ryusou Blog' }) => (
  <>
    <Container>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Nav />
      {children}
      <Footer />
    </Container>
  </>
);

export default withTheme(Layout);
