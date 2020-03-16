import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import theme from '../theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <ColorModeProvider>
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
