import { FC, ReactNode, useState } from 'react';
import { styles } from './Layout.css';

import { Nav } from './Nav/Nav';
import { Footer } from './Footer/Footer';

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const layout = true;

  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};
