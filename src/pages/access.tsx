import Head from 'next/head';
import { Access } from '../components/elements/Access/Access';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const AccessPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>access</title>
    </Head>
    <Access />
  </>
);

AccessPage.getLayout = (page) => <Layout title="来場方法">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default AccessPage;
