import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Flex, Image, Heading } from '@chakra-ui/core';

import {} from '../theme';
import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Header: React.FC = () => (
  <header>
    <Flex
      align="center"
      margin="3"
      paddingBottom="2"
      borderBottom="1px"
      borderBottomColor="teal.100"
    >
      <Image
        rounded="full"
        size="12"
        objectFit="cover"
        src="/logo.png"
        alt="りゅーそうブログのロゴ"
      />
      <Heading as="h1" size="lg" marginLeft="2">
        RyuSou Blog
      </Heading>
      <DarkModeSwitch />
    </Flex>
  </header>
);

export default withTheme(Header);
