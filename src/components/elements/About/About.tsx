import React from 'react';
import * as styles from './About.css';

export const Caption: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>INIADとは</h2>
    <div className={styles.caption}>
      東洋大学情報連携学部(Information Networking for Innovation And
      Design:通称INIAD)は、
      「文芸理融合」をテーマにコンピュータ･サイエンス教育を基盤としてチームを組み、コンピュータを使いこなし、
      情報を通して連携し、素早くアイデアを形にできるような教育を行っています。
      学生それぞれが情報技術やデザイン、ビジネスなどの学びを深め、それらの知識を連携して活かすというカリキュラムが
      組み立てられており、このINIAD-FESでもそれらの活動で身につけた技術や連携力が大いに発揮されています。
    </div>
    <h2 className={styles.title}>INIAD-FESとは</h2>
    <div className={styles.caption}>
      INIAD-FESとは、2017年の情報連携学部設立から続く、情報連携学部の学生が主体となって開催する大学祭です。毎年、当学部で学ぶ情報技術などの知識を活かした特色のある出展や、委員会による老若男女が楽しめる企画などが行われています。第6回となる今回は、オンライン開催となった第4回と第5回のノウハウを活かし、対面開催とオンライン開催を両立したハイブリッド開催となっています。
    </div>
    <h2 className={styles.title}>テーマ「新タナ折衷」について</h2>
    <div className={styles.caption}>
      第6回INIAD-FESのテーマは「新タナ折衷」です。このテーマは、様々な変化が訪れているINIAD-FESや社会に対し、今までとこれからのどちらか一方をただ受け入れるのでなく、それらをうまく組み合わせ、再構築する「新しい折衷案」を来場した方に伝える、という意味で設定しました。
      対面とオンライン、新しく赤羽台キャンパスに移転してきたライフデザイン学部、新しいINIADのカリキュラムであるINIAD2.0への遷移など、第6回INIAD-FESを取り巻く様々な変化や革新の中で、学生たちが生み出したハイブリッド開催を始めとする「新タナ折衷」にぜひ注目して楽しんでください。
    </div>
  </div>
);
