import { FC } from 'react';
import Head from 'next/head';
import { Access } from '../components/elements/Access/Access';

const AccessPage: FC = () => (
  <>
    <Head>
      <title>access</title>
    </Head>
    <Access />
  </>
);

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default AccessPage;
