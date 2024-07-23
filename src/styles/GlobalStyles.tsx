"use client"

import { css, Global, useTheme } from "@emotion/react"

export const breakpoints = {
  xs: 375,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  xxl: 1920,
}

export const GlobalStyles = () => {
  const theme = useTheme()
  return (
    <Global
      styles={css`
        body {
          margin: 0;
        }

        html {
          font-family: ${theme.font.family};
          color: ${theme.color.black};
          box-sizing: border-box;
          scroll-behavior: smooth;
          overflow-x: hidden;

          // We dynamically calculate the font to scale between the min and max font size when the screen size
          //  moves from the smaller breakpoint to the biggest one
          // https://www.smashingmagazine.com/2016/05/fluid-typography/
          font-size: calc(
            (1em * (${theme.font.minimumSize} / 16)) +
              (${theme.font.maximumSize} - ${theme.font.minimumSize}) *
              (100vmax - ${breakpoints.xs}px) / (${breakpoints.xxl} - ${breakpoints.xs})
          );

          @media (max-width: ${breakpoints.xs}px) or (max-height: ${breakpoints.xs}px) {
            font-size: calc(1em * (${theme.font.minimumSize} / 16));
          }

          @media (min-width: ${breakpoints.xxl}px) or (min-height: ${breakpoints.xxl}px) {
            font-size: calc(1em * (${theme.font.maximumSize} / 16));
          }
        }

        *, *:before, *:after {
          box-sizing: inherit;
        }
      `}
    />
  )
}
