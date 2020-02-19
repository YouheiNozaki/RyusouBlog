import * as React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { Grid, Link as ChakraLink } from '@chakra-ui/core';

const Nav: React.FC = () => (
  <nav>
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={[2, 4, 6, 8]}
      margin={[2, 4, 6, 8]}
      padding={[4, 6, 8, 10]}
      textAlign="center"
    >
      <Link href="/">
        <ChakraLink
          href="/"
          fontSize={['sm', 'md', 'lg', 'xl']}
          fontWeight="bold"
        >
          HOME
        </ChakraLink>
      </Link>
      <Link href="/posts">
        <ChakraLink
          href="/posts"
          fontSize={['sm', 'md', 'lg', 'xl']}
          fontWeight="bold"
        >
          BLOG
        </ChakraLink>
      </Link>
      <Link href="/work">
        <ChakraLink
          href="/work"
          fontSize={['sm', 'md', 'lg', 'xl']}
          fontWeight="bold"
        >
          WORK
        </ChakraLink>
      </Link>
      <Link href="/contact">
        <ChakraLink
          href="/contact"
          fontSize={['sm', 'md', 'lg', 'xl']}
          fontWeight="bold"
        >
          CONTACT
        </ChakraLink>
      </Link>
    </Grid>
  </nav>
);

export default withTheme(Nav);
