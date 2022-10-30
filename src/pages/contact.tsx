import Head from 'next/head';
import { NextPage } from 'next/types';
import { Contact } from '../components/elements/Contact/Contact';
import { Layout } from '../components/layouts/Layout';

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>contact</title>
    </Head>
    <Layout title="問い合わせ">
      <Contact />
    </Layout>
  </>
);

// eslint-disable-next-line import/no-default-export
export default ContactPage;
