import Head from 'next/head';
import { Schedule } from '../components/elements/Schedule/Schedule';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const NoticePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Schedule</title>
    </Head>
    <Schedule />
  </>
);

NoticePage.getLayout = (page) => <Layout title="日程表">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default NoticePage;
