"use client"

import styled from "@emotion/styled"
import { css } from "@emotion/react"

interface IText {
  color?: string
  accent?: string
  alignment?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl"
}

export const Title = styled.h1<IText>`
  font-size: ${({ theme, size }) => (size ? theme.font.size[size] : theme.font.size.xxl)};
  text-align: ${({ alignment }) => alignment ?? "center"};

  ${({ theme, color, accent }) => css`
    color: ${color ?? theme.color.black};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}
`

export const Subtitle = styled.h2<IText>`
  font-size: ${({ theme, size }) => (size ? theme.font.size[size] : theme.font.size.xl)};
  text-align: ${({ alignment }) => alignment ?? "center"};

  ${({ theme, color, accent }) => css`
    color: ${color ?? theme.color.black};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}
`

export const Text = styled.p<IText>`
  font-size: ${({ theme, size }) => (size ? theme.font.size[size] : theme.font.size.md)};
  text-align: ${({ alignment }) => alignment ?? "center"};

  ${({ theme, color, accent }) => css`
    color: ${color ?? theme.color.black};

    & span {
      color: ${accent ?? theme.accent};
    }
  `}
`
