import Head from 'next/head';
import { NextPage } from 'next/types';
import { useRouter } from 'next/router';
import { ProgramDetail } from '../../components/elements/ProgramDetail/ProgramDetail';
import { Layout } from '../../components/layouts/Layout';

const ProgramDetailPage: NextPage = () => {
  const router = useRouter();
  const { uuid } = router.query;

  return (
    <>
      <Head>
        <title>Program List</title>
      </Head>
      <Layout title="企画詳細">
        <ProgramDetail uuid={uuid as string} />
      </Layout>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default ProgramDetailPage;
