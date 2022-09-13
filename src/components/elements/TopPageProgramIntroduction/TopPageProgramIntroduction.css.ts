import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const caption = style({
  fontSize: '2rem',
});

export const sliderWrapper = style({
  'width': '90%',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '80%',
    },
  },
});

export const slider = style({
  width: '100%',
});

export const sliderItem = style({
  padding: '20px',
});

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
});

export const dummyImage = style({
  width: '100%',
  height: '100%',
  aspectRatio: '16/9',
  backgroundColor: '#CCCCCC',
});

export const title = style({
  textAlign: 'center',
  fontSize: '1.5rem',
});

export const dummyTitle = style({
  width: '100%',
  height: '2rem',
  backgroundColor: '#CCCCCC',
  transform: 'scale(0.6, 0.6)',
  transformOrigin: 'center',
});
