import { createTheme } from '@vanilla-extract/css';
import { colors, fonts } from '../../../styles/themes.css';

export const [terminalThemeClass, terminalVars] = createTheme({
  colors: { ...colors, background: '#240A0A', text: '#fafafa' },
  fonts: { ...fonts },
});
