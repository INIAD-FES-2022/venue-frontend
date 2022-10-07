import { Html, Head, Main, NextScript } from 'next/document';
import { NextPage } from 'next/types';

const Document: NextPage = () => (
  <Html>
    <Head>
      <link
        href="https://fonts.googleapis.com/earlyaccess/hannari.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/earlyaccess/kokoro.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Yuji+Syuku&family=DotGothic16&family=Noto+Serif+JP&family=Sawarabi+Mincho&family=Silkscreen&family=Cairo+Play:wght@300&family=Coda&family=Oxanium:wght@300&family=Turret+Road:wght@300&display=swap"
        rel="stylesheet"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

// eslint-disable-next-line import/no-default-export
export default Document;
