/* eslint-disable */
import { css } from 'styled-components';

export const mediaQuery = {
  extraSmall: (...args: any) => css`
    @media only screen and (min-width: 33rem) {
      ${css(args)}
    }
  `,
  small: (...args: any) => css`
    @media only screen and (min-width: 48rem) {
      ${css(args)}
    }
  `,
  medium: (...args: any) => css`
    @media only screen and (min-width: 64rem) {
      ${css(args)}
    }
  `,
  large: (...args: any) => css`
    @media only screen and (min-width: 90rem) {
      ${css(args)}
    }
  `,
  extraLarge: (...args: any) => css`
    @media only screen and (min-width: 120rem) {
      ${css(args)}
    }
  `,
};

export const transition = `
cursor: pointer;
transition: 0.2s all ease;

&:hover {
  transform: scale(1.0125);
}
`
export const boxShadow = `box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.2);`;