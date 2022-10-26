import Head from 'next/head';
import { Caption } from '../components/elements/About/About';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const AboutIniadFesPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>about fes</title>
    </Head>
    <Caption />
  </>
);

AboutIniadFesPage.getLayout = (page) => (
  <Layout title="いにあど-ふぇす">{page}</Layout>
);

// eslint-disable-next-line import/no-default-export
export default AboutIniadFesPage;
