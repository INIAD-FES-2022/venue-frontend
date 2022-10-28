import React, { Dispatch, SetStateAction, FC } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavAppearanceChanges } from '../NavAppearanceChange';
import * as styles from './deleteNav.css';

type Props = {
  setNavAppearance: Dispatch<SetStateAction<NavAppearanceChanges>>;
};

export const DeletedNav: FC<Props> = ({ setNavAppearance }) => (
  <div>
    <button
      type="button"
      aria-label="minimal nav"
      className={styles.deletedNav}
      onClick={() => {
        setNavAppearance('maximized');
      }}
    >
      <GiHamburgerMenu size={64} color="#ebf3dc" />
    </button>
  </div>
);
