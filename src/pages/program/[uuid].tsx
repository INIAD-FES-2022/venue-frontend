import { useRouter } from 'next/router';
import Head from 'next/head';
import { ProgramDetail } from '../../components/elements/ProgramDetail/ProgramDetail';
import { Layout } from '../../components/layouts/Layout';
import type { NextPageWithLayout } from '../_app';

const ProgramDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { uuid } = router.query;

  return (
    <>
      <Head>
        <title>Program List</title>
      </Head>
      <ProgramDetail uuid={uuid as string} />
    </>
  );
};

ProgramDetailPage.getLayout = (page) => (
  <Layout title="企画詳細">{page}</Layout>
);

// eslint-disable-next-line import/no-default-export
export default ProgramDetailPage;
