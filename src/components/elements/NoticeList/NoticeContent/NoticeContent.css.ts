import { style } from '@vanilla-extract/css';

export const content = style({
  width: '100%',
  padding: '20px 0 20px 0',
  fontSize: '1.2rem',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});
