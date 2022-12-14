import React from 'react';
import { Nav } from '../../layouts/Nav/Nav';
import { Footer } from '../../layouts/Footer/Footer';
import { Terminal } from '../../common/terminal/Terminal';

import { MainVisual } from './MainVIsual/MainVisual';
import { TopPageProgramIntroduction } from './TopPageProgramIntroduction/TopPageProgramIntroduction';
import { TopPageAnnouncement } from './TopPageAnnouncement/TopPageAnnouncement';
import { Sponsored } from './Sponsored/Sponsored';

import * as styles from './TopPage.css';
import { Pamphlet } from './Pamphlet/Pamphlet';

export const TopPage = () => (
  <div className={`${styles.container}`}>
    <main className={`${styles.main} flex flex-col gap-8`}>
      <Terminal barTitle="看板" className={`${styles.mainVisual}`}>
        <MainVisual />
      </Terminal>
      <Terminal barTitle="企画紹介" className={`${styles.programIntroduction}`}>
        <TopPageProgramIntroduction />
        <Pamphlet />
      </Terminal>
      <Terminal barTitle="お知らせ" className={`${styles.announcement}`}>
        <TopPageAnnouncement />
      </Terminal>
      <Terminal barTitle="協賛" className={`${styles.sponsored}`}>
        <Sponsored />
      </Terminal>
    </main>
    <Nav className={`${styles.nav}`} />
    <Footer className={`${styles.footer}`} />
  </div>
);
