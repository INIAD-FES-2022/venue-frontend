import type { NextPage } from 'next';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { TopPage } from '../components/elements/TopPage/TopPage';

const queryClient = new QueryClient();
const Home: NextPage = () => (
  <QueryClientProvider client={queryClient}>
    <Head>
      <title>6th INIAD-FES</title>
    </Head>
    <TopPage />
  </QueryClientProvider>
);

// eslint-disable-next-line import/no-default-export
export default Home;
