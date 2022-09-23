import { FC } from 'react';
import { styles } from './terminalTop.css';

type Props = {
  size?: number;
  onDeleteButtonClicked: () => void;
  onMaximizeButtonClicked: () => void;
  onMinimizeButtonClicked: () => void;
  className?: string;
  isMinimized?: boolean;
};

export const TerminalTop: FC<Props> = ({
  size = 24,
  onDeleteButtonClicked,
  onMaximizeButtonClicked,
  onMinimizeButtonClicked,
  className = '',
  isMinimized = false,
}) => (
  <div
    className={`${className} ${styles.container} ${
      isMinimized ? 'rounded-md' : 'rounded-t-md'
    } flex h-6 w-full flex-row-reverse items-center`}
  >
    <button
      type="button"
      className={`${styles.deleteButton} flex h-full w-8 items-center justify-center`}
      onClick={onDeleteButtonClicked}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#FFF"
          strokeWidth={2}
          d="M3,3 L21,21 M3,21 L21,3"
        />
      </svg>
    </button>
    <button
      type="button"
      className={`${styles.maximizeButton} flex h-full w-8 items-center justify-center`}
      onClick={onMaximizeButtonClicked}
    >
      <svg
        width="24"
        height="16"
        viewBox="0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="layer1">
          <rect fill="#ffffff" width="24" height="16" x="0" y="0" />
          <rect fill="#000000" width="22" height="14" x="1" y="1" />
        </g>
      </svg>
    </button>
    <button
      type="button"
      className={`${styles.maximizeButton} flex h-full w-8 flex-col-reverse items-center`}
      onClick={onMinimizeButtonClicked}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <line x1={4} y1={14} x2={20} y2={14} stroke="#FFF" strokeWidth={2} />
      </svg>
    </button>
  </div>
);
