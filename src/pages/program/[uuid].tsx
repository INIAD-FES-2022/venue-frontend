import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import { NextPage } from 'next/types';
import { ProgramDetail } from '../../components/elements/ProgramDetail/ProgramDetail';
import { Layout } from '../../components/layouts/Layout';
import { getAllProgramIds } from '../../hooks/api/getAllProgramIds';
import { Response } from '../../types/api/program';
import { getProgramData } from '../../hooks/api/getProgramData';

type Props = {
  program: Response;
};

const ProgramDetailPage: NextPage<Props> = ({ program }) => (
  <>
    <Head>
      <title>Program List</title>
    </Head>
    <Layout title="企画詳細">
      <ProgramDetail data={program} />
    </Layout>
  </>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllProgramIds();

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const program = await getProgramData(ctx?.params?.uuid as string);

  return {
    props: {
      program,
    },
    revalidate: 3,
  };
};

// eslint-disable-next-line import/no-default-export
export default ProgramDetailPage;
