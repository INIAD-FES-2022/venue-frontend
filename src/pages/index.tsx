import type { NextPage } from 'next';
import Head from 'next/head';
import { TopPage } from '../components/elements/TopPage/TopPage';

const Home: NextPage = () => (
  <>
    <Head>
      <title>6th INIAD-FES</title>
    </Head>
    <TopPage />
  </>
);

// eslint-disable-next-line import/no-default-export
export default Home;
