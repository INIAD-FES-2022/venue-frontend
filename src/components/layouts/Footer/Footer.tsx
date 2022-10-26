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
      <ul className={styles.gridItemList}>
        <li>
          <a href="https://www.toyo.ac.jp/">東洋大学</a>
        </li>
        <li>
          <a href="https://www.iniad.org/">INIAD東洋大学情報連携学部</a>
        </li>
      </ul>
      <h3 className={styles.headline3}>他きゃんぱす大学祭</h3>
      <ul className={styles.gridItemList}>
        <li>
          <a href="https://hakusanfes.studio.site/">
            <span>東洋大学</span>白山キャンパス<span>大学祭</span> 第58回 白山祭
          </a>
        </li>
        <li>
          <a href="https://wellbfes.com/">
            <span>東洋大学</span>ライフデザイン学部<span>大学祭</span> 第2回
            WELLB-FES
          </a>
        </li>
        <li>
          <a href="https://twitter.com/VIrqQTNfchoIKyV">
            <span>東洋大学</span>板倉キャンパス<span>大学祭</span> 第25回 雷祭
          </a>
        </li>
        <li>
          <a href="http://www.komorebisai.com/home/">
            <span>東洋大学</span>川越キャンパス<span>大学祭</span> 第13回
            こもれび祭
          </a>
        </li>
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
