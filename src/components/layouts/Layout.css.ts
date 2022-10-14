import { style } from '@vanilla-extract/css';

export const main = style({
  display: 'grid',
  alignItems: 'start',
  gridTemplateColumns: '1fr minmax(20%, 16rem)',
  gap: '1.5rem',
  padding: '1.5rem',
});

export const nav = style({
  gridColumn: '-2 / -1',
  gridRow: '1 / 3',
  position: 'sticky',
  top: '1.5rem',
});

export const content = style({
  minHeight: '95vh',
});
