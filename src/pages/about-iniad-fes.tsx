import { FC } from 'react';
import Head from 'next/head';
import { Caption } from '../components/elements/About/About';

const AboutIniadFesPage: FC = () => (
  <>
    <Head>
      <title>about fes</title>
    </Head>
    <Caption />
  </>
);

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default AboutIniadFesPage;
