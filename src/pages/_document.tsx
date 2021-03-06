import React from 'react';
import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <html lang="ja">
        <Head lang="ja">
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="description"
            content="りゅーそうブログでは、教員でもあるりゅーそうがプログラミングの技術について紹介しています。"
          />
          <link rel="shortcut icon" href={'/mainLogo.png'} />
          <link rel="apple-touch-icon" href={'/mainLogo.png'} />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.10.0/styles/atom-one-light.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
