import { style } from '@vanilla-extract/css';

export const gridItem = style({
  width: '100%',
  height: '21.875rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.2rem',
  backgroundColor: '#e0ebaf',
});

export const imageWrapper = style({
  margin: '0 auto',
  width: '100%',
  aspectRatio: '16 / 9',
  position: 'relative',
});

export const info = style({
  width: '100%',
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '0.5rem',
});

export const partition = style({
  width: '100%',
  height: '16px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
});

export const title = style({
  fontSize: '1.5rem',
  textAlign: 'center',
});

export const description = style({
  position: 'relative',
});

export const caption = style({
  fontSize: '1.2rem',
  position: 'absolute',
  top: '50%',
  left: '0',
  transform: 'translateY(-50%)',
});

export const descriptionText = style({
  textAlign: 'center',
});
