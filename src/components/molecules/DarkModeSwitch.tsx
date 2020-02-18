import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/core';

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Switch
      right="5"
      position="fixed"
      color="gray.100"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
