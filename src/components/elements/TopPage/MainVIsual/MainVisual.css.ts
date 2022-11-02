import { style, globalStyle, globalKeyframes } from '@vanilla-extract/css';
import { fonts, globalVars } from '../../../../styles/themes.css';
import { smartPhone } from '../../../layouts/Layout.css';

export const mainVisual = style({
  'position': 'relative',
  'width': '100%',
  'height': '80vh',
  'minHeight': '430px',
  'fontFamily': `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
  'overflow': 'hidden',
  '@media': {
    [smartPhone]: {},
  },
});

globalStyle(`${mainVisual} > *`, {
  position: 'absolute',
});

export const cloudAndSun = style({
  'top': '4%',
  'right': '0%',
  'width': '32%',
  'userSelect': 'none',

  '@media': {
    [smartPhone]: {
      width: '50%',
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
      top: '15%',
      right: '-3%',
      width: '2px',
      height: '75%',
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
