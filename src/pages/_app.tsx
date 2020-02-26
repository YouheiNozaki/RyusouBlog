import React from 'react';
import App, { AppContext } from 'next/app';
import { ThemeProvider, ColorModeProvider } from '@chakra-ui/core';

import theme from '../theme';
import '../styles/layout.css';

export default class extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeProvider theme={theme}>
          {/* <CSSReset /> */}
          <ColorModeProvider>
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </>
    );
  }
}
