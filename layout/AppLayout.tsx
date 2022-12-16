import { Footer } from 'components/Footer/Footer';
import Head from 'next/head';
import React from 'react';
import { ChildrenProps } from 'static/types/GenericTypes';

interface AppLayoutProps extends ChildrenProps {}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='root'>
      <Head>
        <title>Neptune - Test App</title>
        <meta
          name='Neptune'
          content='Test App - By Pawan'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      {children}
      <Footer />
    </div>
  );
};
