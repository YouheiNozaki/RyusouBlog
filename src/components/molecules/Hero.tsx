import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Image, Flex } from '@chakra-ui/core';

const Hero: React.FC = () => (
  <Flex backgroundColor="white">
    <Image src="./hero.png" margin="0 auto" />
  </Flex>
);
export default withTheme(Hero);
