import 'styles/globals.css';
import 'styles/theme.css';
import type { AppProps } from 'next/app';
import { AppLayout } from 'layout/AppLayout';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider?: any) {
  return new Web3(provider);
}
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Web3ReactProvider>
  );
}
