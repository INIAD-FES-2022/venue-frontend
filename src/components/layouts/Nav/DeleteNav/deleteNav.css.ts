import { style } from '@vanilla-extract/css';
import { fonts, globalVars } from '../../../../styles/themes.css';
import { smartPhone } from '../../Layout.css';

export const deletedNav = style({
  position: 'fixed',
  bottom: '1rem',
  right: '1rem',
  borderRadius: '0.25rem',
  padding: '0.5rem',
  boxShadow: '2px 4px 8px 1px rgb(1, 1, 1 , 0.72)',
  backgroundColor: globalVars.colors.accent_red,
});
