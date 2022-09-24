import { style, createVar, StyleRule } from '@vanilla-extract/css';
import { terminalVars } from '../terminalTheme.css';

export const size = createVar();

const buttonStyle: StyleRule = {
  'backgroundColor': terminalVars.colors.terminalTop_black,
  ':hover': {
    backgroundColor: terminalVars.colors.terminalTop_black_lighter,
  },
  ':active': {
    backgroundColor: terminalVars.colors.terminalTop_black_darker,
  },
};

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.terminalTop_background_lightBrown,
  }),
  deleteButton: style({
    ...buttonStyle,
    'borderTopRightRadius': '0.375rem',
    ':hover': {
      backgroundColor: terminalVars.colors.terminalTop_red,
    },
    ':active': {
      backgroundColor: terminalVars.colors.terminalTop_red_darker,
    },
  }),
  maximizeButton: style({
    ...buttonStyle,
  }),
  minimizeButton: style({
    ...buttonStyle,
  }),
};
