import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head lang="ja">
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="shortcut icon" href={'https://t-cr.jp/favicon.ico'} />
          <link rel="apple-touch-icon" href={'https://t-cr.jp/logo.png'} />
          <link href="/path/to/styles/a11y-dark.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
