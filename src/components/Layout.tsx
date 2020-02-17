import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Flex } from '@chakra-ui/core';

import Head from 'next/head';
import Nav from './Nav';
import Hero from './Hero';
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
      <Flex
        direction="column"
        justifyContent="flex-start"
        margin="0 auto"
        maxWidth="containers.md"
      >
        <Nav />
        <Hero />
        {children}
        <Footer />
      </Flex>
    </Container>
  </>
);

export default withTheme(Layout);
