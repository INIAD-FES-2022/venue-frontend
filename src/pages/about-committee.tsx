import Head from 'next/head';
import { Committee } from '../components/elements/Committee/Committee';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const AboutCommitteePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>about committee</title>
    </Head>
    <Committee />
  </>
);

AboutCommitteePage.getLayout = (page) => (
  <Layout title="実行委員会">{page}</Layout>
);

// eslint-disable-next-line import/no-default-export
export default AboutCommitteePage;
