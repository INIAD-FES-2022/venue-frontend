import Link from 'next/link';
import React, { Dispatch, SetStateAction, FC } from 'react';
import { NavAppearanceChanges } from '../NavAppearanceChange';
import * as styles from './navContent.css';

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

type Props = {
  setNavAppearance: Dispatch<SetStateAction<NavAppearanceChanges>>;
  isSmartPhone: boolean;
};

export const NavContent: FC<Props> = ({ setNavAppearance, isSmartPhone }) => (
  <ul className={styles.nav}>
    {Object.entries(navItems).map(([href, text]) => (
      <li key={href}>
        <Link href={href}>
          <button
            type="button"
            onClick={() => {
              isSmartPhone
                ? setNavAppearance('minimized')
                : setNavAppearance('maximized');
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
);
