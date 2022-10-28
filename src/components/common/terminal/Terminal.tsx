import { FC, ReactNode, useState, useCallback, useEffect } from 'react';
import { styles } from './terminal.css';
import { TerminalTop } from './terminalTop/TerminalTop';
// import { terminalThemeClass } from './terminalTheme.css';

type Props = {
  children: ReactNode;
  barTitle?: string;
  barHeight?: number;
  isDeletable?: boolean;
  isMinimizable?: boolean;
  isMinimized?: boolean;
  minimizedByDefault?: boolean;
  addFuncOnMinimizeButtonClicked?: () => void;
  addFuncOnMaximizeButtonClicked?: () => void;
  className?: string;
};

export const Terminal: FC<Props> = ({
  children,
  barTitle = '',
  barHeight = 32,
  isDeletable = false,
  isMinimizable = false,
  isMinimized = false,
  minimizedByDefault = false,
  addFuncOnMinimizeButtonClicked = () => {},
  addFuncOnMaximizeButtonClicked = () => {},
  className = '',
}) => {
  // ターミナル風の何かに表示されている様な見た目にする
  // TODO barHeightの指定で大きさを調整出来るようにしたい
  // isDeletableがtrueなら×をクリックすることでこのコンポーネントは削除される
  // isMinimizeがtrueなら_をクリックすると最小化?っぽい見た目になって、その状態で□をクリックすると元に戻る

  const [isDeleted, setIsDeleted] = useState(false);
  const permittedSetIsDeleted = useCallback(
    // 多分useCallbackをやる必要はないけれど、一応
    (value: boolean) => {
      if (isDeletable) {
        setIsDeleted(value);
      }
    },
    [isDeletable],
  );
  const [isMinimize, setIsMinimize] = useState(minimizedByDefault);
  useEffect(() => {
    setIsMinimize(isMinimized);
  }, [isMinimized]);
  useEffect(() => {
    setIsMinimize(minimizedByDefault);
  }, [minimizedByDefault]);

  const permittedSetIsMinimize = useCallback(
    // 多分useCallbackをやる必要はないけれど、一応
    (value: boolean) => {
      if (isMinimizable) {
        setIsMinimize(value);
      }
    },
    [isMinimizable],
  );

  return (
    // NOTE 空のfragment(<></>)を使うな(isDeletedがtrueの時に空のfragment(<></>)になる)って怒られるけれど、
    // JSX.Elementを返したいので無視している、もっと良いやり方はあるのだろうか
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {!isDeleted && (
        <div className={`${className}  ${styles.container} flex flex-col`}>
          {/* ${terminalThemeClass} */}
          <TerminalTop
            isMinimized={isMinimize}
            onDeleteButtonClicked={() => {
              permittedSetIsDeleted(true);
            }}
            onMaximizeButtonClicked={() => {
              permittedSetIsMinimize(false);
              addFuncOnMaximizeButtonClicked();
            }}
            onMinimizeButtonClicked={() => {
              permittedSetIsMinimize(true);
              addFuncOnMinimizeButtonClicked();
            }}
            barTitle={barTitle}
            barHeight={barHeight}
            className=""
          />
          {!isMinimize && <div className="terminal-content">{children}</div>}
        </div>
      )}
    </>
  );
};
