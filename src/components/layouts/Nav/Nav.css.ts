import { style } from '@vanilla-extract/css';
import { fonts, globalVars } from '../../../styles/themes.css';
import { smartPhone } from '../Layout.css';

export const nav = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',
  padding: '0.5rem',
  fontSize: '1.5rem',
  fontFamily: `${fonts.japanese_1}, ${fonts.japanese_2}, ${fonts.japanese_3}, sans-serif`,
});

export const returnTop = style({
  'display': 'none',

  '@media': {
    [smartPhone]: {
      marginTop: '1rem',
      display: 'inline',
    },
  },

  '::before': {
    content: '>',
  },

  '::after': {
    content: '<',
  },
});

export const minimalNav = style({
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  borderRadius: '0.25rem',
  padding: '0.5rem',
  boxShadow: '2px 4px 8px 1px rgb(1, 1, 1 , 0.72)',
  backgroundColor: globalVars.colors.accent_red,
});
