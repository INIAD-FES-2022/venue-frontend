import Head from 'next/head';
import { Contact } from '../components/elements/Contact/Contact';
import { Layout } from '../components/layouts/Layout';
import type { NextPageWithLayout } from './_app';

const ContactPage: NextPageWithLayout = () => (
  <>
    <Head>
      <title>contact</title>
    </Head>
    <Contact />
  </>
);

ContactPage.getLayout = (page) => <Layout title="問い合わせ">{page}</Layout>;

// eslint-disable-next-line import/no-default-export
export default ContactPage;
