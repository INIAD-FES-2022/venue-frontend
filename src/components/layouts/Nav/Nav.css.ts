import { style } from '@vanilla-extract/css';
import { globalVars } from '../../../styles/themes.css';

export const styles = {
  container: style({
    backgroundColor: globalVars.colors.sub_yellow_1,
    borderRadius: '0.375rem',
  }),
};
