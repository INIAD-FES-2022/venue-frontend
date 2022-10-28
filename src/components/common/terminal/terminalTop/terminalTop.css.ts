import { style, createVar, StyleRule } from '@vanilla-extract/css';
import { terminalVars } from '../terminalTheme.css';

export const height = createVar();
export const buttonWidth = createVar();
export const lineHeight = createVar();

const buttonStyle: StyleRule = {
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
    backgroundColor: terminalVars.colors.terminal_frame_red,
    height,
    color: terminalVars.colors.sub_blue_2,
  }),
  buttons: style({}),
  barTitle: style({
    fontSize: height,
    lineHeight,
    color: terminalVars.colors.terminalTop_text_white,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    cursor: 'default',
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
  otherPlaceButton: style({
    height: lineHeight,
    width: 'auto',
    backgroundColor: '#000',
  }),
};
