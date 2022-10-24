import { style, globalStyle } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  maxWidth: '1000px',
  height: '100%',
  margin: '30px auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#FEF5EA',
  gap: '20px',
  padding: '30px',
  borderRadius: '50px',
  boxShadow:
    '0 4px 4px 0 rgba(0, 0, 0, 0.25), inset 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
});

globalStyle(`${container} > *`, {
  width: '100%',
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
  paddingBottom: '20px',
  borderBottom: '1px solid #e0e0e0',
});
