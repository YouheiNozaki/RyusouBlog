import * as React from 'react';
import { withTheme } from 'emotion-theming';
import { Image } from '@chakra-ui/core';

const Hero: React.FC = () => (
  <>
    <Image src="./hero.png" />
  </>
);

export default withTheme(Hero);
