import { FC } from 'react';
import Head from 'next/head';
import { Attention } from '../components/elements/Attention/Attention';

const AttentionPage: FC = () => (
  <>
    <Head>
      <title>attention</title>
    </Head>
    <Attention />
  </>
);

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default AttentionPage;
