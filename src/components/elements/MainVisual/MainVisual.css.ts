import { style, globalStyle, globalKeyframes } from '@vanilla-extract/css';
import { fonts } from '../../../styles/themes.css';

export const mainVisual = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  backgroundColor: '#FFF5EA',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
  overflow: 'hidden',
});

globalStyle(`${mainVisual} > *`, {
  position: 'absolute',
});

export const sun = style({
  'top': '13%',
  'right': '10%',
  'width': '20%',
  'userSelect': 'none',

  '@media': {
    'screen and (max-width: 950px)': {
      top: '10%',
      right: '5%',
      width: '40%',
    },

    'screen and (max-width: 600px)': {
      top: '5%',
      right: '5%',
      width: '50%',
    },
  },
});

export const cloud = style({
  'top': '3%',
  'right': '-10%',
  'width': '35%',
  'userSelect': 'none',

  '@media': {
    'screen and (max-width: 950px)': {
      top: '5%',
      right: '-15%',
      width: '50%',
    },

    'screen and (max-width: 600px)': {
      top: '2%',
      right: '-30%',
      width: '70%',
    },
  },
});

export const title = style({
  'fontSize': '6vw',
  'bottom': '20px',
  'left': '20px',

  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '12vw',
    },
  },
});

const flash = 'globalFlash';

globalKeyframes(flash, {
  '0%': { opacity: 0 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0 },
});

export const iniadFes = style({
  position: 'relative',

  selectors: {
    '&::before': {
      position: 'absolute',
      content: '',
      top: '0',
      right: '-3%',
      width: '2px',
      height: '100%',
      backgroundColor: 'black',
      animationName: `${flash}`,
      animationDuration: '1s',
      animationIterationCount: 'infinite',
    },
  },
});

export const date = style({
  fontSize: '3.5rem',
  top: '20px',
  left: '20px',
});

export const logo = style({
  'top': '50%',
  'left': '50%',
  'transform': 'translate(-50%, -50%)',
  'height': '50%',
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'justifyContent': 'center',

  '@media': {
    'screen and (max-width: 600px)': {
      height: '30%',
    },
  },
});

globalStyle(`${logo} > img`, {
  height: '100%',
  width: 'auto',
  margin: '20px',
  userSelect: 'none',
});

globalStyle(`${logo} > p`, {
  'fontSize': '3rem',

  '@media': {
    'screen and (max-width: 600px)': {
      fontSize: '1.8rem',
    },
  },
});
