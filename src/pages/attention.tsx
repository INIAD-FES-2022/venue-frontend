import Head from 'next/head';
import { NextPage } from 'next/types';
import { Attention } from '../components/elements/Attention/Attention';
import { Layout } from '../components/layouts/Layout';

const AttentionPage: NextPage = () => (
  <>
    <Head>
      <title>attention</title>
    </Head>
    <Layout title="諸注意">
      <Attention />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default AttentionPage;
