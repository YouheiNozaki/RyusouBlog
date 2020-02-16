import * as React from 'react';
import { Flex, Image, Heading } from '@chakra-ui/core';

import {} from '../theme';

const Header: React.FC = () => (
  <header>
    <Flex align="center">
      <Image
        rounded="full"
        size="12"
        objectFit="cover"
        src="/logo.png"
        alt="りゅーそうブログのロゴ"
      />
      <Heading as="h1" size="lg">
        RYUSOU BLOG
      </Heading>
    </Flex>
  </header>
);

export default Header;
