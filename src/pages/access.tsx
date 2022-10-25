import type { NextPage } from 'next';
import Head from 'next/head';
import { Access } from '../components/elements/Access/Access';

const AccessPage: NextPage = () => (
  <>
    <Head>
      <title>access</title>
    </Head>
    <Access />
  </>
);

// eslint-disable-next-line import/no-default-export
export default AccessPage;
