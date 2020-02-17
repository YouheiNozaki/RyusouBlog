import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/core';

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      position="fixed"
      right="5"
      color="teal"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
