import React from 'react';
import { Nav } from '../../layouts/Nav/Nav';
import { Footer } from '../../layouts/Footer/Footer';
import { Terminal } from '../../common/terminal/Terminal';
import * as layoutStyle from '../../layouts/Layout.css';
import * as styles from './TopPage.css';

export const TopPage = () => (
  <div className={`${styles.container}`}>
    <Nav className={`${styles.nav}`} />
    <main className={`${styles.main} `}>
      <Terminal barTitle="看板" className={`${styles.mainVisual}`}>
        <p>sample text</p>
      </Terminal>
      <Terminal barTitle="企画紹介" className={`${styles.programIntroduction}`}>
        <p>sample text</p>
      </Terminal>
      <Terminal barTitle="お知らせ" className={`${styles.announcement}`}>
        <p>sample text</p>
      </Terminal>
      <Terminal barTitle="協賛" className={`${styles.sponsored}`}>
        <p>sample text</p>
      </Terminal>
    </main>
    <Footer className={`${styles.footer}`} />
  </div>
);
