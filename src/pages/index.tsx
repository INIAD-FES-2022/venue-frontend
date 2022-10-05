import type { NextPage } from 'next';
import Head from 'next/head';
import { MainVisual } from '../components/elements/MainVisual/MainVisual';

const Home: NextPage = () => (
  <>
    <Head>
      <title>INIAD FES</title>
    </Head>
    <MainVisual />
  </>
);

// eslint-disable-next-line import/no-default-export
export default Home;
