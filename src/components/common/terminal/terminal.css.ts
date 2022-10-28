import { style } from '@vanilla-extract/css';
import { terminalVars } from './terminalTheme.css';

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.main,
    backdropFilter: 'blur(24px)',
    boxShadow: '2px 4px 8px 1px rgb(1, 1, 1 , 0.72)',
    borderRadius: '0.375rem',
    border: `4px solid ${terminalVars.colors.terminal_frame_red}`,
    boxSizing: 'border-box',
  }),
};
