import type { NextPage } from 'next';
import Head from 'next/head';
import { Attention } from '../components/elements/Attention/Attention';

const AttentionPage: NextPage = () => (
  <>
    <Head>
      <title>attention</title>
    </Head>
    <Attention />
  </>
);

// eslint-disable-next-line import/no-default-export
export default AttentionPage;
