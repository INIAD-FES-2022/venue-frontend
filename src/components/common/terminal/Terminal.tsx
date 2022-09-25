import { FC, ReactNode, useState, useCallback } from 'react';
import { styles } from './terminal.css';
import { TerminalTop } from './terminalTop/TerminalTop';
// import { terminalThemeClass } from './terminalTheme.css';

type Props = {
  children: ReactNode;
  size?: number;
  isDeletable?: boolean;
  isMinimizable?: boolean;
  className?: string;
};

export const Terminal: FC<Props> = ({
  children,
  size = 24,
  isDeletable = false,
  isMinimizable = false,
  className = '',
}) => {
  // ターミナル風の何かに表示されている様な見た目にする
  // TODO sizeの指定で大きさを調整出来るようにしたい
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
  const [isMinimize, setIsMinimize] = useState(false);
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
            }}
            onMinimizeButtonClicked={() => {
              permittedSetIsMinimize(true);
            }}
            size={size}
            className=""
          />
          {!isMinimize && (
            <div className="terminal-content p-1">{children}</div>
          )}
        </div>
      )}
    </>
  );
};
