import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FFF5EA',
  gap: '20px',
  padding: '20px',
});

globalStyle(`${container} > *`, {
  maxWidth: '1000px',
  padding: '0 20px 0 20px',
});

export const headline = style({
  fontSize: '2rem',
  width: '100%',
});

export const category = style({
  fontSize: '1rem',
  display: 'flex',
  gap: '10px',
});

export const noticeList = style({
  width: '100%',
});

export const title = style({
  fontSize: '1.5rem',
});

export const noticeItem = style({
  width: '100%',
  padding: '20px 0 20px 0',
  borderBottom: '1px solid #e0e0e0',
});

export const noticeContent = style({
  width: '100%',
  padding: '20px 0 20px 0',
  fontSize: '1.2rem',
});

export const withIcon = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.2rem',
});

export const AccordionWrapper = style({
  width: '100%',
});

export const AccordionStyle = style({
  width: '100%',
});

export const closeStyle = style({
  height: '0',
  overflow: 'hidden',
});

export const openArrow = style({
  transform: 'ScaleY(-1)',
  margin: '0 auto',
  transition: 'transform 0.3s',
});

export const closeArrow = style({
  transform: 'ScaleY(1)',
});

export const accordionToggle = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
