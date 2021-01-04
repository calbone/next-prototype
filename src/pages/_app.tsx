import React from 'react';
import { /* App,*/ AppProps /*AppContext*/ } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/redux/createStore';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
};

// MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   let pageProps = {};
//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }
//   return { ...pageProps };
// };

export default MyApp;

/**
 * see:https://nextjs.org/docs/basic-features/typescript#custom-app
 */

// export default class MyApp extends App {
//   static async getInitialProps({ Component, ctx }: AppContext) {
//     let pageProps = {};
//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//     }
//     return { pageProps };
//   }
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <Provider store={store}>
//         <Head>
//           <title>My page</title>
//           <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
//         </Head>
//         <Component {...pageProps} />
//       </Provider>
//     );
//   }
// }
