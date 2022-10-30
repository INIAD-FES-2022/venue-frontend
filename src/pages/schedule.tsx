import Head from 'next/head';
import { NextPage } from 'next/types';
import { Schedule } from '../components/elements/Schedule/Schedule';
import { Layout } from '../components/layouts/Layout';

const NoticePage: NextPage = () => (
  <>
    <Head>
      <title>Schedule</title>
    </Head>
    <Layout title="日程表">
      <Schedule />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default NoticePage;
