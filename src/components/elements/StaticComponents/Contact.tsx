import React from 'react';
import { contactStyle } from './Contact.css';

export const Contact: React.FC = () => (
  <div className={contactStyle.wrapper}>
    <h2 className={contactStyle.sectionTitle}>お問い合わせ</h2>
    <div className={contactStyle.contents}>
      <h3>お問い合わせ</h3>

      <p>
        お問い合わせは、下記の公式SNSアカウントのダイレクトメッセージまでお送りください
      </p>
      <br />
      <p>
        <a
          href="https://twitter.com/iniadfes"
          className={contactStyle.elements}
        >
          Twitter
        </a>
        <a
          href="https://www.instagram.com/iniad_fes/"
          className={contactStyle.elements}
        >
          Instagram
        </a>
      </p>
      <br />
      <p>または、電子メールアドレスでもお問い合わせいただけます。</p>
      <br />
      <p className={contactStyle.elements}>support@iniadfes.com</p>
      <br />
      <p>
        ※大学祭に関するお問い合わせは上記のINIAD-FES実行委員会の連絡先にお願いします。東洋大学および東洋大学情報連携学部へのお問い合わせはお控えください。
      </p>
    </div>
  </div>
);
