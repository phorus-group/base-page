import { breakpoints } from "./GlobalStyles"
import { Noto_Sans } from "next/font/google"

interface ITheme {
  primary: string
  accent: string
  color: { [_: string]: string }
  font: {
    family: string
    size: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
    }
    minimumSize: number
    maximumSize: number
  }
  breakpoints: {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  spacing: {}
}

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}

class BaseTheme implements ITheme {
  font
  breakpoints
  accent
  color
  primary
  spacing

  constructor(props: Omit<ITheme, "breakpoints">) {
    this.accent = props.accent
    this.color = props.color
    this.primary = props.primary
    this.spacing = props.spacing
    this.font = props.font
    this.breakpoints = {
      xs: `${breakpoints.xs / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
      sm: `${breakpoints.sm / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
      md: `${breakpoints.md / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
      lg: `${breakpoints.lg / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
      xl: `${breakpoints.xl / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
      xxl: `${breakpoints.xxl / (((this.font.minimumSize ?? 0) + (this.font.maximumSize ?? 0)) / 2)}em`,
    }
  }
}

const font = Noto_Sans({ weight: "400", subsets: ["latin"], fallback: ["sans-serif"] })

export const defaultTheme = new BaseTheme({
  primary: "#DEE4FF",
  accent: "#59D377",
  color: {
    white: "#FFFFFF",
    black: "#111111",
    gray: "#7B8795",
    lightBlue: "#8196F7",
    blue: "#418EE9",
    strongBlue: "#074EE8",
    green: "#45BC5F",
    red: "#FF2121",
  },
  font: {
    family: font.style.fontFamily,
    size: {
      xs: "0.75rem",
      sm: "0.88rem",
      md: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      xxl: "1.75rem",
    },
    minimumSize: 10,
    maximumSize: 20,
  },
  spacing: {},
})
