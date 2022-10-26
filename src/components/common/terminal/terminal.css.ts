import { style } from '@vanilla-extract/css';
import { terminalVars } from './terminalTheme.css';

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.main,
    borderRadius: '0.375rem',
    border: `4px solid ${terminalVars.colors.terminal_frame_red}`,
    boxSizing: 'border-box',
  }),
};
