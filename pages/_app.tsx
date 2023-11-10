import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PrivateRoute from './PrivateRoute';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (

    <PrivateRoute>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval';"
        />
      </Head>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}
