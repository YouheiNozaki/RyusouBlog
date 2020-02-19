import * as React from 'react';
import Link from 'next/link';
import { withTheme } from 'emotion-theming';
import { Flex, Image, Heading, Link as ChakraLink } from '@chakra-ui/core';

import { DarkModeSwitch } from '../molecules/DarkModeSwitch';

const Header: React.FC = () => (
  <header>
    <Flex
      align="center"
      padding={[2, 2, 4, 4]}
      borderBottom="1px"
      borderBottomColor="gray.50"
      backgroundColor="gray.50"
      position="fixed"
      top="0"
      left="0"
      width="full"
      zIndex={1}
    >
      <Link href="/">
        <ChakraLink href="/">
          <Image
            rounded="full"
            size={12}
            objectFit="cover"
            src="/logo.png"
            alt="りゅーそうブログのロゴ"
          />
        </ChakraLink>
      </Link>
      <Heading
        as="h1"
        color="teal.900"
        fontSize={'xl'}
        marginLeft="2"
        letterSpacing="tight"
      >
        RYUSOU BLOG
      </Heading>
      <DarkModeSwitch />
    </Flex>
  </header>
);

export default withTheme(Header);
