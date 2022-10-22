import React from 'react';
import Link from 'next/link';

import { Terminal } from '../../common/terminal/Terminal';
import * as styles from './Nav.css';

type Props = {
  className?: string;
};

const navItems = {
  './': '入口',
  './about-iniad-fes': 'いにあど-ふぇす',
  './about-committee': '実行委員会',
  './program': '企画一覧',
  './attention': '諸注意',
  './access': '来場方法',
  './schedule': '日程表',
  './contact': '問い合わせ',
};

export const Nav: React.FC<Props> = ({ className }) => (
  <Terminal barTitle="誘導" className={className} isMinimizable>
    <ul className={styles.nav}>
      {Object.entries(navItems).map(([href, text]) => (
        <li key={href}>
          <Link href={href}>{text}</Link>
        </li>
      ))}
    </ul>
  </Terminal>
);
