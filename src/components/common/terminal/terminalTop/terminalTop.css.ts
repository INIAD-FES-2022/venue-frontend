import { style, createVar } from '@vanilla-extract/css';
import { terminalVars } from '../terminalTheme.css';

export const size = createVar();

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.terminalTop_background_lightBrown,
  }),
  deleteButton: style({
    'backgroundColor': terminalVars.colors.terminalTop_black,
    'borderTopRightRadius': '0.375rem',
    ':hover': {
      backgroundColor: terminalVars.colors.terminalTop_red,
    },
    ':active': {
      backgroundColor: terminalVars.colors.terminalTop_red,
    },
  }),
  maximizeButton: style({
    'backgroundColor': terminalVars.colors.terminalTop_black,
    ':hover': {
      backgroundColor: terminalVars.colors.terminalTop_black_lighter,
    },
    ':active': {
      backgroundColor: terminalVars.colors.terminalTop_black_darker,
    },
  }),
  minimizeButton: style({
    'backgroundColor': terminalVars.colors.terminalTop_black,
    ':hover': {
      backgroundColor: terminalVars.colors.terminalTop_black_lighter,
    },
    ':active': {
      backgroundColor: terminalVars.colors.terminalTop_black_darker,
    },
  }),
};
