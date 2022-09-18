import React from 'react';
import * as styles from './TopPageannouncement.css';

export const Notice: React.FC = () => (
  <div className={styles.container}>
    <h2 className={styles.caption}>お知らせ</h2>
    <article className={styles.container}>
      <div className={styles.notice}>
        <p />
      </div>
    </article>
  </div>
);
