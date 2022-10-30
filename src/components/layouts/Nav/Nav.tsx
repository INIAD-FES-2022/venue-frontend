import React, { useState, useEffect, useMemo, FC } from 'react';

import { TerminalForNav } from './TerminalFotNav/TerminalForNav';
// import * as styles from './Nav.css';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { DeletedNav } from './DeleteNav/DeleteNav';
import { NavContent } from './NavContent/NavContent';
import { NavAppearanceChanges } from './NavAppearanceChange';

type Props = {
  className?: string;
};

export const Nav: FC<Props> = ({ className }) => {
  const fontSize = 16;
  const { width } = useWindowSize();
  const isSmartPhone = useMemo(() => width <= fontSize * 52, [width]);
  useEffect(() => {
    console.log(isSmartPhone);
  }, [isSmartPhone]);

  const [navAppearance, setNavAppearance] = useState<NavAppearanceChanges>(
    isSmartPhone ? 'minimized' : 'maximized',
  );
  useEffect(() => {
    switch (navAppearance) {
      case 'minimized':
        break;
      case 'maximized':
        break;
      case 'deleted':
        break;
      case null:
        console.log(navAppearance);
        break;

      default:
        break;
    }
  }, [navAppearance]);

  // useEffect(() => {
  //   console.log('isMinimized:', isMinimized);
  // }, [isMinimized]);

  if (navAppearance === 'deleted') {
    return <DeletedNav setNavAppearance={setNavAppearance} />;
  }

  return isSmartPhone ? (
    <TerminalForNav
      barTitle="案内"
      className={className}
      navAppearance={navAppearance}
      addFuncOnMaximizeButtonClicked={() => {
        switch (navAppearance) {
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
      addFuncOnMinimizeButtonClicked={() => {
        switch (navAppearance) {
          case 'maximized':
            setNavAppearance('minimized');
            break;
          default:
            break;
        }
      }}
      addFuncOnDeleteButtonClicked={() => {
        switch (navAppearance) {
          case 'maximized':
            setNavAppearance('deleted');
            break;
          case 'minimized':
            setNavAppearance('deleted');
            break;
          default:
            break;
        }
      }}
      addFuncOnOtherPlaceClicked={() => {
        switch (navAppearance) {
          case 'maximized':
            setNavAppearance('minimized');
            break;
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
    >
      <NavContent
        setNavAppearance={setNavAppearance}
        isSmartPhone={isSmartPhone}
      />
    </TerminalForNav>
  ) : (
    <TerminalForNav
      barTitle="案内"
      className={className}
      navAppearance={navAppearance}
      addFuncOnMaximizeButtonClicked={() => {
        switch (navAppearance) {
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
      addFuncOnMinimizeButtonClicked={() => {
        switch (navAppearance) {
          case 'maximized':
            setNavAppearance('minimized');
            break;
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
      addFuncOnDeleteButtonClicked={() => {
        switch (navAppearance) {
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
      addFuncOnOtherPlaceClicked={() => {
        switch (navAppearance) {
          case 'minimized':
            setNavAppearance('maximized');
            break;
          default:
            break;
        }
      }}
    >
      <NavContent
        setNavAppearance={setNavAppearance}
        isSmartPhone={isSmartPhone}
      />
    </TerminalForNav>
  );
};
