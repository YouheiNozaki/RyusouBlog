import * as React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { Grid, Link as ChakraLink } from '@chakra-ui/core';

const Nav: React.FC = () => (
  <nav>
    <Grid
      templateColumns="repeat(4, 1fr)"
      gap={8}
      margin="5"
      padding="10"
      textAlign="center"
    >
      <Link href="/">
        <ChakraLink href="/" fontSize="xl" fontWeight="bold">
          HOME
        </ChakraLink>
      </Link>
      <Link href="/posts">
        <ChakraLink href="/posts" fontSize="xl" fontWeight="bold">
          BLOG
        </ChakraLink>
      </Link>
      <Link href="/work">
        <ChakraLink href="/work" fontSize="xl" fontWeight="bold">
          WORK
        </ChakraLink>
      </Link>
      <Link href="/contact">
        <ChakraLink href="/contact" fontSize="xl" fontWeight="bold">
          CONTACT
        </ChakraLink>
      </Link>
    </Grid>
  </nav>
);

export default withTheme(Nav);
