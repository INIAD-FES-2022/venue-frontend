import Head from 'next/head';
import { ProgramList } from '../../components/elements/ProgramList/ProgramList';
import { Layout } from '../../components/layouts/Layout';
import type { NextPageWithLayout } from '../_app';

const ProgramPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Program List</title>
    </Head>
    <ProgramList />
  </>
);

ProgramPage.getLayout = (page) => <Layout title="企画一覧">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default ProgramPage;
