import { style, createVar, StyleRule } from '@vanilla-extract/css';
import { terminalVars } from '../terminalTheme.css';

export const height = createVar();
export const buttonWidth = createVar();
export const lineHeight = createVar();

const buttonStyle: StyleRule = {
  'backgroundColor': terminalVars.colors.terminalTop_black,
  'width': buttonWidth,
  ':hover': {
    backgroundColor: terminalVars.colors.terminalTop_black_lighter,
  },
  ':active': {
    backgroundColor: terminalVars.colors.terminalTop_black_darker,
  },
  'selectors': {
    '&>svg &:hover': {
      backgroundColor: terminalVars.colors.terminalTop_black_lighter,
    },
    '&>svg &:active': {
      backgroundColor: terminalVars.colors.terminalTop_black_darker,
    },
  },
};

export const styles = {
  container: style({
    backgroundColor: terminalVars.colors.terminalTop_background_lightBrown,
    height,
    color: terminalVars.colors.sub_blue_2,
  }),
  buttons: style({}),
  barTitle: style({
    fontSize: height,
    lineHeight,
    whiteSpace: 'nowrap',
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
    'selectors': {
      '&>svg &:hover': {
        backgroundColor: terminalVars.colors.terminalTop_red,
      },
      '&>svg &:active': {
        backgroundColor: terminalVars.colors.terminalTop_red_darker,
      },
    },
  }),
  maximizeButton: style({
    ...buttonStyle,
  }),
  minimizeButton: style({
    ...buttonStyle,
  }),
};
