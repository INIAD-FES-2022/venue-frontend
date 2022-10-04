import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
});

export const caption = style({
  fontSize: '1.5rem',
  marginBottom: '10px',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});

export const frame = style({
  padding: '20px',
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
});
