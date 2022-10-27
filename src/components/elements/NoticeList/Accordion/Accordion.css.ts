import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
});

export const content = style({
  width: '95%',
  margin: '0 auto',
});

export const closeStyle = style({
  height: '0',
  overflow: 'hidden',
});

export const openArrow = style({
  transform: 'ScaleY(-1)',
  transition: 'transform 0.3s',
  height: '20px',
  width: '20px',
});

export const closeArrow = style({
  transform: 'ScaleY(1)',
});

export const toggleButton = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '1.5rem',
});
