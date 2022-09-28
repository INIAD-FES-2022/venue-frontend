import React from 'react';
import { contactStyle } from './Contact.css';

export const Contact: React.FC = () => (
  <div className={contactStyle.wrapper}>
    <h2 className={contactStyle.sectionTitle}>お問い合わせ</h2>
    <br />
    <h3>実行委員</h3>
    <p className={contactStyle.elements}>Email: mailaddress</p>
    <h3>赤羽台キャンパス</h3>
    <p className={contactStyle.elements}>TEL: 03-5924-2600</p>
    <p className={contactStyle.elements}>e-mail: contact@iniad.org</p>
  </div>
);
