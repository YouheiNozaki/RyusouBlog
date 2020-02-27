import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Flex } from '@chakra-ui/core';

import Nav from './Nav';
import Hero from '../molecules/Hero';
import Header from './Header';
import Footer from './Footer';
import { Container } from './Container';

const Layout: React.FC = ({ children }) => (
  <>
    <Container>
      <Header />
      <Hero />
      <Flex
        direction="column"
        justifyContent="flex-start"
        margin="0 auto"
        maxWidth="containers.md"
        letterSpacing="letterSpacings.wider"
        lineHeight="lineHeights.taller"
      >
        <Nav />
        {children}
      </Flex>
    </Container>
    <Footer />
  </>
);

export default withTheme(Layout);
