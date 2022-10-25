import { FC } from 'react';
import Head from 'next/head';
import { Committee } from '../components/elements/Committee/Committee';

const AboutCommitteePage: FC = () => (
  <>
    <Head>
      <title>about committee</title>
    </Head>
    <Committee />
  </>
);

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default AboutCommitteePage;
