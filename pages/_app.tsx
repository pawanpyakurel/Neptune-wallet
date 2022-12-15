import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppLayout } from 'pages/layout/AppLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
