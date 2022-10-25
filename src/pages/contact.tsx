import type { NextPage } from 'next';
import Head from 'next/head';
import { Contact } from '../components/elements/Contact/Contact';

const ContactPage: NextPage = () => (
  <>
    <Head>
      <title>contact</title>
    </Head>
    <Contact />
  </>
);

// eslint-disable-next-line import/no-default-export
export default ContactPage;
