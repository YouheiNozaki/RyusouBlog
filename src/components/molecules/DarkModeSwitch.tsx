import React from 'react';
import { useColorMode, Switch, FormLabel } from '@chakra-ui/core';

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <FormLabel htmlFor="darkmode-switch">
      <Switch
        id="darkmode-switch"
        isChecked={isDark}
        onChange={toggleColorMode}
        position="fixed"
        right={[2, 3, 4, 5]}
      />
    </FormLabel>
  );
};
