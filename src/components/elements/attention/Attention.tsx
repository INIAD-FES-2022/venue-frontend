import React from 'react';
import * as styles from './Attention.css';

export const Attention: React.FC = () => (
  <div className={styles.attention}>
    <h1 className={styles.title}>諸注意</h1>
    <p className={styles.caption}>
      お車でのご来場はできません。公共交通機関をご利用ください。
      大学祭に関するお問い合わせは、INIAD-FES実行委員会の公式SNSまたは電子メールまでお願いします。東洋大学ならびに情報連携学部、ライフデザイン学部への電話、電子メールでのお問い合わせはご遠慮ください。
      感染症対策にご理解とご協力をお願いします。
    </p>
  </div>
);
