import Head from 'next/head';
import React from 'react';
import { GLOBAL_CONSTANT } from 'static/constants/GlobalConstant';

type AppHeadProps = {};

export const AppHead = ({}: AppHeadProps) => (
  <Head>
    <title>{GLOBAL_CONSTANT.TAB_TITLE}</title>
    <meta {...GLOBAL_CONSTANT.META} />
    <link
      rel='icon'
      href='/favicon.ico'
    />
  </Head>
);
