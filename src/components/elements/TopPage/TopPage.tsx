import React from 'react';
import { Nav } from '../../layouts/Nav/Nav';
import { Footer } from '../../layouts/Footer/Footer';
import { Terminal } from '../../common/terminal/Terminal';

import { MainVisual } from './MainVIsual/MainVisual';
import { TopPageProgramIntroduction } from './TopPageProgramIntroduction/TopPageProgramIntroduction';
import { TopPageAnnouncement } from './TopPageAnnouncement/TopPageAnnouncement';
import { Sponsored } from './Sponsored/Sponsored';

import * as styles from './TopPage.css';

export const TopPage = () => (
  <div className={`${styles.container}`}>
    <Nav className={`${styles.nav}`} />
    <main className={`${styles.main} `}>
      <Terminal barTitle="看板" className={`${styles.mainVisual}`}>
        <MainVisual />
      </Terminal>
      <Terminal barTitle="企画紹介" className={`${styles.programIntroduction}`}>
        <TopPageProgramIntroduction />
      </Terminal>
      <Terminal barTitle="お知らせ" className={`${styles.announcement}`}>
        <TopPageAnnouncement />
      </Terminal>
      <Terminal barTitle="協賛" className={`${styles.sponsored}`}>
        <Sponsored />
      </Terminal>
    </main>
    <Footer className={`${styles.footer}`} />
  </div>
);
