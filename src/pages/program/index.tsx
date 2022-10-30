import Head from 'next/head';
import { NextPage } from 'next/types';
import { ProgramList } from '../../components/elements/ProgramList/ProgramList';
import { Layout } from '../../components/layouts/Layout';

const ProgramPage: NextPage = () => (
  <>
    <Head>
      <title>Program List</title>
    </Head>
    <Layout title="企画一覧">
      <ProgramList />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default ProgramPage;
