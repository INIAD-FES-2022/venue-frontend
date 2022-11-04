import Head from 'next/head';
import { NextPage } from 'next/types';
import { Access } from '../components/elements/Access/Access';
import { Layout } from '../components/layouts/Layout';

const AccessPage: NextPage = () => (
  <>
    <Head>
      <title>access</title>
    </Head>
    <Layout title="来場方法">
      <Access />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default AccessPage;
