import Head from 'next/head';
import { Attention } from '../components/elements/Attention/Attention';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const AttentionPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>attention</title>
    </Head>
    <Attention />
  </>
);

AttentionPage.getLayout = (page) => <Layout title="諸注意">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default AttentionPage;
