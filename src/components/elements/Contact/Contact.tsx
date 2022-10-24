import React from 'react';
import { contactStyle } from './Contact.css';

export const Contact: React.FC = () => (
  <div className={contactStyle.wrapper}>
    <h2 className={contactStyle.sectionTitle}>お問い合わせ</h2>
    <br />
    <ul>
      <li className={contactStyle.listElements}>Mail: support@iniadfes.com</li>
      <li className={contactStyle.listElements}>Twitter DM: @iniadfes</li>
      <li className={contactStyle.listElements}>Instagram DM: @iniad_fes</li>
    </ul>
    <br />
    <p>
      大学祭に関するお問い合わせは上記のINIAD-FES実行委員会の連絡先にお願いします。東洋大学および東洋大学情報連携学部へのお問い合わせはお控えください。
    </p>
  </div>
);
