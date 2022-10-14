import React from 'react';
import Link from 'next/link';

import { Terminal } from '../../common/terminal/Terminal';
import * as styles from './Nav.css';

type Props = {
  className?: string;
};

export const Nav: React.FC<Props> = ({ className }) => (
  <Terminal barTitle="誘導" className={className}>
    <ul className={styles.nav}>
      <li>
        <Link href="./">入口</Link>
      </li>
      <li>
        <Link href="./">紹介</Link>
      </li>
      <li>
        <Link href="./program">企画一覧</Link>
      </li>
      <li>
        <Link href="./attention">諸注意</Link>
      </li>
      <li>
        <Link href="./access">来場方法</Link>
      </li>
      <li>
        <Link href="./schedule">日程表</Link>
      </li>
      <li>
        <Link href="./contact">問い合わせ</Link>
      </li>
    </ul>
  </Terminal>
);
