import { style } from '@vanilla-extract/css';

export const overview = style({
  'width': '100%',
  'display': 'flex',
  'gap': '20px',
  '@media': {
    'screen and (max-width: 550px)': {
      flexDirection: 'column',
    },
  },
});

export const thumbnailWrapper = style({
  'width': '45%',
  '@media': {
    'screen and (max-width: 550px)': {
      width: '100%',
    },
  },
});

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16 / 9',
});

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flexGrow: 1,
});

export const category = style({
  fontSize: '1rem',
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

export const title = style({
  fontSize: '2rem',
});
