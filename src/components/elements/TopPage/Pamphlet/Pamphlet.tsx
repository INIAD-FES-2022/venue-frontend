import React from 'react';
import * as styles from './pamphlet.css';

export const Pamphlet = () => (
  <div className={styles.container}>
    <a
      href="https://my.ebook5.net/u/Il0sRx/"
      target="_blank"
      rel="noreferrer"
      className={styles.frame}
    >
      <button type="button" className={styles.caption}>
        パンフレットはこちらから
      </button>
    </a>
  </div>
);
