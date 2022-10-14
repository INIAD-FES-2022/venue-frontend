import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';

import { Terminal } from '../../common/terminal/Terminal';
import * as styles from './Footer.css';

type Props = {
  className?: string;
};

export const Footer: React.FC<Props> = ({ className }) => (
  <Terminal barTitle="脚注" className={className}>
    <div className={styles.footer}>
      <h2 className={styles.title}>関連さいと</h2>
      <h3 className={styles.headline3}>東洋大学公式さいと</h3>
      <ul>
        <li>東洋大学</li>
        <li>INIAD東洋大学情報連携学部</li>
      </ul>
      <h3 className={styles.headline3}>他きゃんぱす大学祭</h3>
      <ul>
        <li>東洋大学白山キャンパス大学祭 第56回 白山祭</li>
        <li>東洋大学ライフデザイン学部大学祭 第2回 WELLB-FES</li>
        <li>東洋大学板倉キャンパス大学祭 第24回 雷祭</li>
        <li>東洋大学川越キャンパス大学祭 こもれび祭</li>
      </ul>
      <div className={styles.sns}>
        <a href="https://twitter.com/iniadfes" className={styles.snsLink}>
          <span className={styles.snsText}>Twitter</span>
          <BsTwitter size={40} />
        </a>
        <a
          href="https://www.instagram.com/iniad_fes/"
          className={styles.snsLink}
        >
          <span className={styles.snsText}>Instagram</span>
          <BsInstagram size={40} />
        </a>
      </div>
    </div>
  </Terminal>
);
