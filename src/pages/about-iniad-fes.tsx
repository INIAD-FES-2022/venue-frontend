import Head from 'next/head';
import { NextPage } from 'next/types';
import { Caption } from '../components/elements/About/About';
import { Layout } from '../components/layouts/Layout';

const AboutIniadFesPage: NextPage = () => (
  <>
    <Head>
      <title>about fes</title>
    </Head>
    <Layout title="いにあど-ふぇす">
      <Caption />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default AboutIniadFesPage;
