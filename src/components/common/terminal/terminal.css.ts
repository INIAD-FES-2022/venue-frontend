import { style } from '@vanilla-extract/css';
import { terminalVars } from './terminalTheme.css';

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.terminal_background_brown,
    borderRadius: '0.375rem',
  }),
};
