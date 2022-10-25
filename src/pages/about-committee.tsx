import type { NextPage } from 'next';
import Head from 'next/head';
import { Committee } from '../components/elements/Committee/Committee';

const AboutCommitteePage: NextPage = () => (
  <>
    <Head>
      <title>about committee</title>
    </Head>
    <Committee />
  </>
);

// eslint-disable-next-line import/no-default-export
export default AboutCommitteePage;
