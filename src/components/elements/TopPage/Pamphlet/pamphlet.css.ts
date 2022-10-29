import { style } from '@vanilla-extract/css';
import * as programDetailCommonStyles from '../../ProgramDetail/common.css';
import * as programDetailStyles from '../../ProgramDetail/ProgramDetail.css';

// export const frame = style({
//   padding: '20px',

//   backgroundImage:
//     "url('/program_detail/background_accent.svg'), url('/program_detail/background.svg')",
//   backgroundRepeat: 'no-repeat, repeat',
//   backgroundPosition: 'top right',
//   maxWidth: '1000px',
//   width: '100%',
// });
export const frame = style([
  programDetailCommonStyles.frame,
  {
    'maxWidth': '1000px',
    'width': '100%',
    ':hover': {
      boxShadow: '1px 2px 6px -1px rgb(1, 1, 1 , 0.32)',
    },
    ':active': {
      boxShadow: '1px 1px 4px -2px rgb(1, 1, 1 , 0.32)',
    },
  },
]);

export const container = style([
  programDetailStyles.container,
  {
    margin: '0 0 20px 0',
    fontSize: '1.4rem',
  },
]);

export const caption = style({});
