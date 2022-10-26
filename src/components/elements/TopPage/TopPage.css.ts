import { style } from '@vanilla-extract/css';
import * as layoutStyle from '../../layouts/Layout.css';
import { smartPhone } from '../../layouts/Layout.css';

export const container = style([layoutStyle.main]);

export const main = style([layoutStyle.content]);

export const nav = style([layoutStyle.nav]);

export const footer = style({});

export const mainVisual = style({});

export const programIntroduction = style({});

export const announcement = style({});

export const sponsored = style({});
