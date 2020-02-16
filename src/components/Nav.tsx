import * as React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { Grid, Link as ChakraLink } from '@chakra-ui/core';

const Nav: React.FC = () => (
  <nav>
    <Grid templateColumns="repeat(4, 1fr)" gap={4} textAlign="center">
      <Link href="/">
        <ChakraLink href="/">HOME</ChakraLink>
      </Link>
      <Link href="/posts">
        <ChakraLink href="/posts">BLOG</ChakraLink>
      </Link>
      <Link href="/work">
        <ChakraLink href="/work">WORK</ChakraLink>
      </Link>
      <Link href="/contact">
        <ChakraLink href="/contact">CONTACT</ChakraLink>
      </Link>
    </Grid>
  </nav>
);

export default withTheme(Nav);
