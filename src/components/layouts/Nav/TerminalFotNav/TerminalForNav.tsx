import { FC, ReactNode } from 'react';
import { styles } from './terminalForNav.css';
import { TerminalTop } from './terminalTop/TerminalTop';
// import { terminalThemeClass } from './terminalTheme.css';
import { NavAppearanceChanges } from '../NavAppearanceChange';

type Props = {
  children: ReactNode;
  barTitle?: string;
  barHeight?: number;
  navAppearance: NavAppearanceChanges;
  addFuncOnMinimizeButtonClicked?: () => void;
  addFuncOnMaximizeButtonClicked?: () => void;
  addFuncOnDeleteButtonClicked?: () => void;
  addFuncOnOtherPlaceClicked?: () => void;
  className?: string;
};

export const TerminalForNav: FC<Props> = ({
  children,
  barTitle = '',
  barHeight = 32,
  navAppearance,
  addFuncOnMinimizeButtonClicked = () => {},
  addFuncOnMaximizeButtonClicked = () => {},
  addFuncOnDeleteButtonClicked = () => {},
  addFuncOnOtherPlaceClicked = () => {},
  className = '',
}) => (
  // ターミナル風の何かに表示されている様な見た目にする
  // isDeletableがtrueなら×をクリックすることでこのコンポーネントは削除される
  // isMinimizableがtrueなら_をクリックすると最小化?っぽい見た目になって、その状態で□をクリックすると元に戻る

  // NOTE 空のfragment(<></>)を使うな(isDeletedがtrueの時に空のfragment(<></>)になる)って怒られるけれど、
  // JSX.Elementを返したいので無視している、もっと良いやり方はあるのだろうか
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {
      <div className={`${className}  ${styles.container} flex flex-col`}>
        {/* ${terminalThemeClass} */}
        <TerminalTop
          isMinimized={navAppearance === 'minimized'}
          onDeleteButtonClicked={() => {
            addFuncOnDeleteButtonClicked();
          }}
          onMaximizeButtonClicked={() => {
            addFuncOnMaximizeButtonClicked();
          }}
          onMinimizeButtonClicked={() => {
            addFuncOnMinimizeButtonClicked();
          }}
          onOtherPlaceClicked={() => {
            addFuncOnOtherPlaceClicked();
          }}
          barTitle={barTitle}
          barHeight={barHeight}
          className=""
        />
        {navAppearance !== 'minimized' && (
          <div className="terminal-content">{children}</div>
        )}
      </div>
    }
  </>
);
