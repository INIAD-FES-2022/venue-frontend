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
          stroke="#EFEFEF"
          strokeWidth={2}
          d={`M 0.7071067811865475,0.7071067811865475 ${
            barHeight * (2 / 3) - 0.7071067811865475
          } ${barHeight * (2 / 3) - 0.7071067811865475} Z`}
          // "M 0.70710678,0.70710678 15.293,15.293 Z"
          // 1 / √2 * (2※strokeWidth / 2) = 0.7071067811865475
        />
        <path
          stroke="#EFEFEF"
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
        height={barHeight * (2 / 3)}
        viewBox={`0 0 ${barHeight} ${barHeight * (2 / 3)}`}
        // "0 0 24 16"
        xmlns="http://www.w3.org/2000/svg"
        onClick={onMaximizeButtonClicked}
      >
        <path
          d={`M0 0v${barHeight * (2 / 3)}h${barHeight}V0zm1 1h${
            barHeight - 2
          }v${barHeight * (2 / 3) - 2}H1z`}
          fill="#EFEFEF"
        />
        {/* <svg width="24" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0v16h24V0zm1 1h22v14H1z" fill="#EFEFEF" />
        </svg> */}
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
        width={barHeight * 0.7}
        height={barHeight}
        viewBox={`0 0 ${barHeight} ${barHeight}`}
        onClick={onMinimizeButtonClicked}
      >
        <line
          x1={0}
          y1={barHeight * 0.8}
          x2={barHeight}
          y2={barHeight * 0.8}
          stroke="#EFEFEF"
          strokeWidth={2}
        />
      </svg>
    </button>
  </div>
);
