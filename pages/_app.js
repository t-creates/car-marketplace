/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Layout from '../components';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  /* eslint-disable-next-line */
  <GoogleOAuthProvider clientId="1020567777273-6rjelg31998d8b8ofb334d8scafube87.apps.googleusercontent.com">
    <Head>
      <title> Car Marketplace </title>
      <link rel="icon" type="image/png" sizes="16x16" href="/car.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/car-32.png" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </GoogleOAuthProvider>
);

export default MyApp;
