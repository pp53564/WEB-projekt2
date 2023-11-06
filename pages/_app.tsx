import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PrivateRoute from './PrivateRoute';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrivateRoute>
      <Component {...pageProps} />
    </PrivateRoute>
  );
}
