"use client"

import { GlobalStyles } from "../../styles/GlobalStyles"
import React from "react"
import RootStyleRegistry from "./RootStyleRegistry"
import { Theme, ThemeProvider } from "@emotion/react"

export interface IWrapper {
  theme: Theme
  children: React.ReactNode | React.ReactNode[]
}

const RootProviders = ({ theme, children }: IWrapper) => (
  <RootStyleRegistry>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  </RootStyleRegistry>
)

export default RootProviders
