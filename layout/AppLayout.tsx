import { Footer } from 'components/Footer/Footer';
import { AppHead } from 'components/Header/AppHead';

import React from 'react';
import { ChildrenProps } from 'static/types/GenericTypes';

interface AppLayoutProps extends ChildrenProps {}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className='root'>
      <AppHead />
      {children}
      <Footer />
    </div>
  );
};
