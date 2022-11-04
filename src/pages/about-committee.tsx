import Head from 'next/head';
import { NextPage } from 'next/types';
import { Committee } from '../components/elements/Committee/Committee';
import { Layout } from '../components/layouts/Layout';

const AboutCommitteePage: NextPage = () => (
  <>
    <Head>
      <title>about committee</title>
    </Head>
    <Layout title="実行委員会">
      <Committee />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default AboutCommitteePage;
