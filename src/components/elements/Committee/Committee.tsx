import React from 'react';
import * as styles from './Committee.css';

export const Committee: React.FC = () => (
  <div className={styles.committee}>
    <h1 className={styles.greeting}>委員長挨拶</h1>
    <p className={styles.caption}>
      INIADとは、東洋大学情報連携学部の別称である、Information Networking for
      Innovation And Design
      の略称です。当学部では、「文芸理融合」をテーマに、学部名にもある「連携」を主軸とした教育を行っています。学生それぞれが情報技術やデザイン、ビジネスについてなどの学びを深め、それらの知識を連携して活かすというカリキュラムが組み立てられており、このINIAD-FESでもそれらの活動で身につけた技術や連携力が大いに発揮されています。
    </p>
  </div>
);
