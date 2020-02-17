import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Flex, Image, Heading } from '@chakra-ui/core';

import { DarkModeSwitch } from '../molecules/DarkModeSwitch';

const Header: React.FC = () => (
  <header>
    <Flex
      align="center"
      margin="3"
      paddingBottom="2"
      borderBottom="1px"
      borderBottomColor="gray.200"
    >
      <Image
        rounded="full"
        size="12"
        objectFit="cover"
        src="/logo.png"
        alt="りゅーそうブログのロゴ"
      />
      <Heading as="h1" size="lg" marginLeft="2" letterSpacing="tight">
        RYUSOU BLOG
      </Heading>
      <DarkModeSwitch />
    </Flex>
  </header>
);

export default withTheme(Header);
