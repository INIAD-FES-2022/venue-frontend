import { style } from '@vanilla-extract/css';

export const gridItem = style({
  width: '100%',
  height: '24rem',
  display: 'flex',
  flexDirection: 'column',
  padding: '0.2rem',
  backgroundColor: '#e0ebaf',
});

export const image = style({
  width: '100%',
  aspectRatio: '16 / 9',
  cursor: 'pointer',
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
  height: '4rem',
  lineHeight: '2rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
});

export const description = style({
  position: 'relative',
});

export const programLabel = style({
  fontSize: '1.2rem',
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
