import { assignInlineVars } from '@vanilla-extract/dynamic';
import { FC } from 'react';
import { styles, height, buttonWidth } from './terminalTop.css';

type Props = {
  barHeight?: number;
  onDeleteButtonClicked: () => void;
  onMaximizeButtonClicked: () => void;
  onMinimizeButtonClicked: () => void;
  className?: string;
  isMinimized?: boolean;
};

const aspectRatio = 1.5;

export const TerminalTop: FC<Props> = ({
  barHeight = 24,
  onDeleteButtonClicked,
  onMaximizeButtonClicked,
  onMinimizeButtonClicked,
  className = '',
  isMinimized = false,
}) => (
  <div
    className={`${className} ${styles.container} ${
      isMinimized ? 'rounded-md' : 'rounded-t-md'
    } flex w-full flex-row-reverse items-center`}
    style={assignInlineVars({ [height]: `${barHeight.toString()}px` })}
  >
    <button
      type="button"
      className={`${styles.deleteButton} flex h-full items-center justify-center`}
      onClick={onDeleteButtonClicked}
      style={assignInlineVars({
        [buttonWidth]: `${(barHeight * aspectRatio).toString()}px`,
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={barHeight * (2 / 3)}
        height={barHeight * (2 / 3)}
        viewBox={`0 0 ${barHeight * (2 / 3)} ${barHeight * (2 / 3)}`}
        onClick={onDeleteButtonClicked}
      >
        <path
          stroke="#fff"
          strokeWidth={2}
          d={`M 0.7071067811865475,0.7071067811865475 ${
            barHeight * (2 / 3) - 0.7071067811865475
          } ${barHeight * (2 / 3) - 0.7071067811865475} Z`}
          // "M 0.70710678,0.70710678 15.293,15.293 Z"
          // 1 / √2 * (2※strokeWidth / 2) = 0.7071067811865475
        />
        <path
          stroke="#fff"
          strokeWidth={2}
          d={`M ${
            barHeight * (2 / 3) - 0.7071067811865475
          } 0.7071067811865475,0.7071067811865475 ${
            barHeight * (2 / 3) - 0.7071067811865475
          } Z`}
          // "M 15.292893,0.70710678 0.70710678,15.292893 Z"
          // 1 / √2 * (2※strokeWidth / 2) = 0.7071067811865475
        />
      </svg>
    </button>
    <button
      type="button"
      className={`${styles.maximizeButton} flex h-full w-8 items-center justify-center`}
      onClick={onMaximizeButtonClicked}
      style={assignInlineVars({
        [buttonWidth]: `${(barHeight * aspectRatio).toString()}px`,
      })}
    >
      <svg
        width={barHeight}
        height={barHeight}
        viewBox={`0 0 ${barHeight} ${barHeight * (2 / 3)}`}
        // "0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onMaximizeButtonClicked}
      >
        <rect
          fill="#ffffff"
          width={barHeight}
          height={barHeight * (2 / 3)}
          x="0"
          y="0"
        />
        <rect
          fill="#000000"
          width={barHeight - 2}
          height={barHeight * (2 / 3) - 2}
          x="1"
          y="1"
        />
      </svg>
    </button>
    <button
      type="button"
      className={`${styles.minimizeButton} flex h-full w-8 flex-col-reverse items-center`}
      onClick={onMinimizeButtonClicked}
      style={assignInlineVars({
        [buttonWidth]: `${(barHeight * aspectRatio).toString()}px`,
      })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={onMinimizeButtonClicked}
      >
        <line
          x1={4}
          y1={barHeight * (2 / 3) - 2}
          x2={barHeight - 4}
          y2={barHeight * (2 / 3) - 2}
          stroke="#FFF"
          strokeWidth={2}
        />
      </svg>
    </button>
  </div>
);
