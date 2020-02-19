import React from 'react';
import { useColorMode, Switch } from '@chakra-ui/core';

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Switch
      isChecked={isDark}
      onChange={toggleColorMode}
      position="fixed"
      right={[2, 3, 4, 5]}
    />
  );
};
