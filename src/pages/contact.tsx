import { FC } from 'react';
import Head from 'next/head';
import { Contact } from '../components/elements/Contact/Contact';

const ContactPage: FC = () => (
  <>
    <Head>
      <title>contact</title>
    </Head>
    <Contact />
  </>
);

// eslint-disable-next-line import/no-anonymous-default-export, import/no-default-export
export default ContactPage;
