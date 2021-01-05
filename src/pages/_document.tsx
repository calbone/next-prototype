import * as React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
    };
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
