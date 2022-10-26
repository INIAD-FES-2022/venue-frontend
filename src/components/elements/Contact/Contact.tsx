import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { contactStyle } from './Contact.css';

export const Contact: React.FC = () => (
  <div>
    <h2 className={contactStyle.sectionTitle}>お問い合わせ</h2>
    <div className={contactStyle.contents}>
      <p>
        お問い合わせは、下記の公式SNSアカウントのダイレクトメッセージまでお送りください
      </p>
      <br />
      <div className={contactStyle.contact}>
        <a
          className={contactStyle.element}
          href="https://twitter.com/iniadfes"
          target="_brank"
        >
          <span className={contactStyle.elementtxt}>Twitter</span>
          <BsTwitter size={30} />
        </a>
        <a
          className={contactStyle.element}
          href="https://www.instagram.com/iniad_fes/"
          target="_brank"
        >
          <span className={contactStyle.elementtxt}>Instagram</span>
          <BsInstagram size={30} />
        </a>
      </div>
      <br />
      <p>または、電子メールアドレスでもお問い合わせいただけます。</p>
      <br />
      <div className={contactStyle.contact}>
        <p className={contactStyle.element}>support@iniadfes.com</p>
      </div>
      <br />
      <p>
        ※大学祭に関するお問い合わせは上記のINIAD-FES実行委員会の連絡先にお願いします。東洋大学および東洋大学情報連携学部へのお問い合わせはお控えください。
      </p>
    </div>
  </div>
);
