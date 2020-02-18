import React from 'react';
import { Flex, useColorMode } from '@chakra-ui/core';

export const Container: React.FC = props => {
  const { colorMode } = useColorMode();

  const bgColor = { light: 'white', dark: 'gray.900' };

  const color = { light: 'gray.900', dark: 'gray.100' };
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      paddingTop="16"
      paddingBottom="20"
      position="relative"
      z-index="2"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
