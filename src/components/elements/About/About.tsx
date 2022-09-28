import React from 'react';
import * as styles from './About.css';

export const Caption: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>About INIAD-FES</h2>
    <div className={styles.caption}>
      INIAD-FESとは、2017年の情報連携学部設立から続く、情報連携学部の学生が主体となって開催する大学祭です。毎年、当学部で学ぶ情報技術などの知識を活かした特色のある出展や、委員会による老若男女が楽しめる企画などが行われています。第6回となる今回は、オンライン開催となった第4回と第5回のノウハウを活かし、対面開催とオンライン開催を両立したハイブリッド開催となっています。
    </div>
  </div>
);
