import React from 'react';
import * as styles from './Attention.css';

export const Attention: React.FC = () => (
  <div className={styles.attention}>
    <h1 className={styles.title}>諸注意</h1>
    <div className={styles.container}>
      <div className={styles.caption}>
        <figure>
          <img src="./car1.png" alt="画像" />
        </figure>
        <div className={styles.txt}>
          <ul>
            <li>お車でのご来場は出来ません。</li>
            <li>公共交通機関をご利用ください。</li>
          </ul>
        </div>
      </div>
      <div className={styles.caption}>
        <figure>
          <img src="./info.png" alt="画像" />
        </figure>
        <div className={styles.txt}>
          <ul>
            <li>
              大学祭に関するお問い合わせは、INIAD-FES実行委員会の公式SNSまたは電子メールまでお願いします。
            </li>
            <li>
              東洋大学ならびに情報連携学部、ライフデザイン学部への電話、電子メールでのお問い合わせはご遠慮ください。
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.caption}>
        <figure>
          <img src="./covid.png" alt="画像" />
        </figure>
        <div className={styles.txt}>
          <ul>
            <li>感染症対策にご理解とご協力をお願いします。</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
