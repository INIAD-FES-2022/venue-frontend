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

export const slider = style({
  width: '90%',
});

export const sliderItem = style({
  padding: '20px',
});

export const thumbnail = style({
  width: '100%',
  aspectRatio: '16/9',
  objectFit: 'cover',
});

export const title = style({
  textAlign: 'center',
  fontSize: '1.5rem',
});
