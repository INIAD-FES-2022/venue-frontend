import { style } from '@vanilla-extract/css';

export const description = style({
  'width': '100%',
  'display': 'flex',
  'flexDirection': 'row',
  'gap': '20px',

  '@media': {
    'screen and (max-width: 650px)': {
      flexDirection: 'column',
    },
  },
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '16px',
  flexGrow: 1,
});

export const logoWrapper = style({
  'width': '25%',
  'maxWidth': '150px',
  'aspectRatio': '1 / 1',
  'position': 'relative',

  '@media': {
    'screen and (max-width: 650px)': {
      width: '150px',
    },
  },
});

export const logo = style({
  borderRadius: '20%',
});

export const name = style({
  fontSize: '1.5rem',
});
