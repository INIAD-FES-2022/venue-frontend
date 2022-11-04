import { NextComponentType, NextPageContext } from 'next';
import { ReactNode, FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '../styles/globals.css';

const queryClient = new QueryClient();

type Props<P = Record<string, unknown>> = {
  Component: NextComponentType<NextPageContext, unknown, P>;
  pageProps: ReactNode;
};

const MyApp: FC<Props> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <Component>{pageProps}</Component>
  </QueryClientProvider>
);

// eslint-disable-next-line import/no-default-export
export default MyApp;
