import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1000px',
  margin: '50px auto',
  padding: '0 20px',
});

export const attention = style({
  width: '100%',
  fontSize: '1rem',
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '1rem',
  rowGap: '5rem',
});

export const attentionIcon = style({
  width: '100%',
  aspectRatio: '1 / 1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
