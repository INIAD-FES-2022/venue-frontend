import React from 'react';
import * as styles from './Attention.css';

export const Attention: React.FC = () => (
  <div className={styles.attention}>
    <h1 className={styles.title}>諸注意</h1>
    <div className={styles.caption}>
      <figure>
        <img src="./car1.png" />
      </figure>
      <p className={styles.text}>お車でのご来場はできません。</p>
      <p className={styles.text}>公共交通機関をご利用ください。</p>

      <figure>
        <img src="./info.png" />
      </figure>
      <span className={styles.text}>
        大学祭に関するお問い合わせは、INIAD-FES実行委員会の公式SNSまたは電子メールまでお願いします。
      </span>
      <span className={styles.text}>
        東洋大学ならびに情報連携学部、ライフデザイン学部への電話、電子メールでのお問い合わせはご遠慮ください。
      </span>

      <figure>
        <img src="./covid.png" />
      </figure>
      <span className={styles.text}>
        感染症対策にご理解とご協力をお願いします。
      </span>
    </div>
  </div>
);
