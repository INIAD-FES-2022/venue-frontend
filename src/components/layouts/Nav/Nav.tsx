import React, { useCallback, useState, useEffect } from 'react';
import Link from 'next/link';

import { GiHamburgerMenu } from 'react-icons/gi';
import { Terminal } from '../../common/terminal/Terminal';
import * as styles from './Nav.css';
import { useWindowSize } from '../../../hooks/useWindowSize';

type Props = {
  className?: string;
};

const navItems = {
  '/': '入口',
  '/about-iniad-fes': 'いにあど-ふぇす',
  '/about-committee': '実行委員会',
  '/program': '企画一覧',
  '/attention': '諸注意',
  '/access': '来場方法',
  '/schedule': '日程表',
  '/contact': '問い合わせ',
  '/notice': 'お知らせ',
};

const ReturnTop: React.FC = () => {
  const returnTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button onClick={returnTop} type="button">
      画面上端へ
    </button>
  );
};

export const Nav: React.FC<Props> = ({ className }) => {
  // const fontSize = parseFloat(
  //   window
  //     .getComputedStyle(document.documentElement)
  //     .getPropertyValue('font-size'),
  // );
  const fontSize = 16;
  const { width } = useWindowSize();
  const minimizedByDefault = useCallback(() => width <= fontSize * 52, [width]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    console.log('isMinimized:', isMinimized);
  }, [isMinimized]);

  return isDeleted ? (
    <div>
      <button
        type="button"
        aria-label="minimal nav"
        className={styles.minimalNav}
        onClick={() => {
          setIsMinimized(false);
          setIsDeleted(false);
        }}
      >
        <GiHamburgerMenu size={64} color="#ebf3dc" />
      </button>
    </div>
  ) : (
    <Terminal
      barTitle="案内"
      className={className}
      isMinimizable
      isMinimized={isMinimized}
      minimizedByDefault={minimizedByDefault()}
      addFuncOnMaximizeButtonClicked={() => setIsMinimized(false)}
      addFuncOnMinimizeButtonClicked={() => setIsMinimized(true)}
      addFuncOnDeleteButtonClicked={() => setIsDeleted(true)}
      addFuncOnOtherPlaceClicked={() => setIsMinimized(!isMinimized)}
    >
      <ul className={styles.nav}>
        {Object.entries(navItems).map(([href, text]) => (
          <li key={href}>
            <Link href={href}>
              <button
                type="button"
                onClick={() => {
                  setIsMinimized(true);
                }}
              >
                {text}
              </button>
            </Link>
          </li>
        ))}
        <li className={styles.returnTop}>
          <ReturnTop />
        </li>
      </ul>
    </Terminal>
  );
};
