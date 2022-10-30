import Head from 'next/head';
import { NextPage } from 'next/types';
import { NoticeList } from '../components/elements/NoticeList/NoticeList';
import { Layout } from '../components/layouts/Layout';

const NoticePage: NextPage = () => (
  <>
    <Head>
      <title>Notice List</title>
    </Head>
    <Layout title="問い合わせ">
      <NoticeList />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default NoticePage;
