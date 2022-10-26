import Head from 'next/head';
import { NoticeList } from '../components/elements/NoticeList/NoticeList';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const NoticePage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Notice List</title>
    </Head>
    <NoticeList />
  </>
);

NoticePage.getLayout = (page) => <Layout title="問い合わせ">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default NoticePage;
